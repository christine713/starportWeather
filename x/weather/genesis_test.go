package weather_test

import (
	"testing"

	keepertest "github.com/chrismos/weather/testutil/keeper"
	"github.com/chrismos/weather/testutil/nullify"
	"github.com/chrismos/weather/x/weather"
	"github.com/chrismos/weather/x/weather/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.WeatherKeeper(t)
	weather.InitGenesis(ctx, *k, genesisState)
	got := weather.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
