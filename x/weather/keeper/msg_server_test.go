package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/chrismos/weather/testutil/keeper"
	"github.com/chrismos/weather/x/weather/keeper"
	"github.com/chrismos/weather/x/weather/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.WeatherKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
