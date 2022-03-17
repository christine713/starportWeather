package keeper

import (
	"context"

	"github.com/chrismos/weather/x/weather/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) WeatherPost(goCtx context.Context, msg *types.MsgWeatherPost) (*types.MsgWeatherPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Create variable of type Post
	var post = types.Post{
		Creator: msg.Creator,
		Title:   msg.Title,
		Body:    msg.Body,
	 }
	// Add a post to the store and get back the ID
	id := k.AppendPost(ctx, post)
	// Return the ID of the post
	return &types.MsgCreatePostResponse{Id: id}, nil

}
