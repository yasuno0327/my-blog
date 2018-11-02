package service

import (
	"io/ioutil"
	"log"
	"time"

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

// GenerateJWT Generate JWT Token
func GenerateJWT(email string) string {
	// Read private key
	signByte, err := readSecretByte()
	if err != nil {
		log.Fatal(err)
	}
	signKey, err := jwt.ParseECPrivateKeyFromPEM(signByte)
	if err != nil {
		log.Fatal(err)
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email":        email,
		"expired_date": time.Date(2018, time.December, 1, 0, 0, 0, 0, time.UTC).Unix(),
	})
	tokenString, err := token.SignedString(signKey)
	if err != nil {
		log.Fatal(err)
	}
	return tokenString
}

func readSecretByte() ([]byte, error) {
	signBytes, err := ioutil.ReadFile("/go/src/api/me.rsa")
	if err != nil {
		return nil, err
	}
	return signBytes, nil
}
