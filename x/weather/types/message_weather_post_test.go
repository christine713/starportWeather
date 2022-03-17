package types

import (
	"testing"

	"github.com/chrismos/weather/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgWeatherPost_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgWeatherPost
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgWeatherPost{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgWeatherPost{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
