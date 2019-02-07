package controllers

import (
	"context"
)

type ImageController struct {
}

func NewImageController() *ImageController {
	return &ImageController{}
}

func (controller *ImageController) Upload(c Context, ctx context.Context) {
}

// func (controller *ImageController)NewUpload(c Context, b *blob.) {
// 	ctx := context.Background()
// 	client, err := storage.NewClient(ctx)
// 	if err != nil {
// 		log.Errorf(err.Error())
// 	}

// }
