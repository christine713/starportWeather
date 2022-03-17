package keeper

import (
	"github.com/chrismos/weather/x/weather/types"
)

var _ types.QueryServer = Keeper{}
