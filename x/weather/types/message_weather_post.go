package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgWeatherPost = "weather_post"

var _ sdk.Msg = &MsgWeatherPost{}

func NewMsgWeatherPost(creator string, title string, body string) *MsgWeatherPost {
	return &MsgWeatherPost{
		Creator: creator,
		Title:   title,
		Body:    body,
	}
}

func (msg *MsgWeatherPost) Route() string {
	return RouterKey
}

func (msg *MsgWeatherPost) Type() string {
	return TypeMsgWeatherPost
}

func (msg *MsgWeatherPost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgWeatherPost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgWeatherPost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
