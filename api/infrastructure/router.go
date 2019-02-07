package infrastructure

import (
	"api/infrastructure/middleware"
	"api/interfaces/controllers"
	"api/interfaces/database"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/redis"
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

var Router *gin.Engine

func init() {
	router := gin.Default()
	// mux := http.NewServeMux()
	sqlhandler := database.NewSQLHandler()

	//
	Migrate(sqlhandler)
	// validations.RegisterCallbacks(sqlhandler)

	// Session Setting
	store, _ := redis.NewStore(10, "tcp", "redis:6379", "", []byte("secret"))
	router.Use(sessions.Sessions("shokubunka_session", store))

	// Grouping route
	api := router.Group("/api")
	v1 := api.Group("/v1")

	v1.Use(middleware.AuthMiddleware())

	// ImageUploader

	// Users
	users := v1.Group("/users")
	userController := controllers.NewUserController(sqlhandler)
	users.POST("/login", func(c *gin.Context) {
		b := binding.Default(c.Request.Method, c.ContentType())
		userController.SignIn(c, b)
	})
	users.Use(middleware.UserPermissionMiddleware())
	users.GET("/logout", func(c *gin.Context) {
		userController.SignOut(c)
	})
	users.POST("", func(c *gin.Context) {
		b := binding.Default(c.Request.Method, c.ContentType())
		userController.Create(c, b)
	})

	// Articles
	articles := v1.Group("/articles")
	articles.Use(middleware.ResourcePermissionMiddleware())
	articleController := controllers.NewArticleController(sqlhandler)
	articles.POST("", func(c *gin.Context) {
		b := binding.Default(c.Request.Method, c.ContentType())
		articleController.Create(c, b)
	})
	articles.GET("", func(c *gin.Context) {
		articleController.Index(c)
	})
	articles.GET("/:id", func(c *gin.Context) {
		articleController.Show(c)
	})
	articles.DELETE("/:id", func(c *gin.Context) {
		articleController.Destroy(c)
	})
	Router = router
}
