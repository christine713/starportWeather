package keeper_test

import (
	"testing"

	testkeeper "github.com/chrismos/weather/testutil/keeper"
	"github.com/chrismos/weather/x/weather/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.WeatherKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
