package simulation

import (
	"math/rand"

	"github.com/chrismos/weather/x/weather/keeper"
	"github.com/chrismos/weather/x/weather/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgWeatherPost(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgWeatherPost{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the WeatherPost simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "WeatherPost simulation not implemented"), nil, nil
	}
}
