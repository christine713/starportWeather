package keeper

import (
	"context"

	"github.com/chrismos/weather/x/weather/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) WeatherPost(goCtx context.Context, msg *types.MsgWeatherPost) (*types.MsgWeatherPostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgWeatherPostResponse{}, nil
}
