import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export let fetchCrypto = createAsyncThunk("crypto/fetchcrypto", async () => {
  let response = await fetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "92450be453mshd72b0b4709dd132p174f20jsn0f925158ff69",
      },
    }
  );
  let data = await response.json();
  return data.data;
});

export let fetchcoindetail=createAsyncThunk("crypto/fetchccoindetail",async ({id})=>{
  let response=await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "coinranking1.p.rapidapi.com",
      "x-rapidapi-key": "92450be453mshd72b0b4709dd132p174f20jsn0f925158ff69"
    }
  })
  let data =await response.json();
  return data.data;
})

export let fetchNews = createAsyncThunk("crypto/fetchNews", async () => {
  let response=await fetch("https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&_limit=5&safeSearch=Off&textFormat=Raw&count=100", {
	"method": "GET",
	"headers": {
		"x-bingapis-sdk": "true",
		"accept": "cryptocurrency",
		"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
		"x-rapidapi-key": "92450be453mshd72b0b4709dd132p174f20jsn0f925158ff69"
	}
})
  let data = await response.json();
  console.log(data.value);
  return data.value;
});

let initialState = {
  stats: null,
  coins: [],
  filtercoins:[],
  news:[],
  coindetail:{}
};

let cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
      search:(state,action)=>{
        let searchitem=action.payload;
        console.log(searchitem);
        state.coins=state.filtercoins.filter(coin=>coin.name.toLowerCase().includes(searchitem.toLowerCase()));
      }
  },
  extraReducers: {
    [fetchCrypto.pending]: (state, action) => {
      console.log(action);
    },
    [fetchCrypto.fulfilled]: (state, action) => {
      state.stats=action.payload.stats;
      state.coins=action.payload.coins;
      state.filtercoins=action.payload.coins;
    },
    [fetchCrypto.rejected]: (state, action) => {
      console.log(action);
    },
    [fetchNews.pending]:(state, action) => {
    },
    [fetchNews.fulfilled]:(state, action) => {
      state.news=action.payload;
    },
    [fetchNews.rejected]:(state, action) => {
    },
    [fetchcoindetail.pending]:(state, action) => {
    },
    [fetchcoindetail.fulfilled]:(state, action) => {
      state.coindetail=action.payload;
    },
    [fetchcoindetail.rejected]:(state, action) => {
    },

  },
});

export let {search}=cryptoSlice.actions;

export default cryptoSlice.reducer;
