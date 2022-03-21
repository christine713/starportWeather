package keeper

import (
	"github.com/christine713/weather/x/weather/types"
)

var _ types.QueryServer = Keeper{}
