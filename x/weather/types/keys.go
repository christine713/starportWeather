package types

const (
	// ModuleName defines the module name
	ModuleName = "weather"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_weather"

	// Keep track of the index of posts
	weatherPostKey      = "weatherPost-value-"
	weatherPostCountKey = "weatherPost-count-"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
