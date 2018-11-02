package service

import (
	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func SessionSet(context interface{}, userID int) {
	c := context.(*gin.Context)
	session := sessions.Default(c) // ginではsession storeに保存、cookieにセットまでを全てやってくれる
	session.Set("userID", userID)
	session.Save()
}

func SessionClear(context interface{}) {
	c := context.(*gin.Context)
	session := sessions.Default(c)
	session.Clear()
	session.Save()
}

func GenerateJWT(email string) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": email,
		"expired_date": time.Date(2018, time.December)
	})
}
