import "./App.css";
import { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import {
  Avatar,
  Button,
  CircularProgress,
  createTheme,
  Link,
  ThemeProvider,
} from "@mui/material";
import Header from "./components/Header";
import SearchAppBar from "./components/Header";
import Copyright from "./components/footer";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  const userColumns = [
    {
      field: "rank",
      headerName: "#",
      width: 20,
      type: "string",
      editable: true,
    },
    {
      field: "icon",
      headerName: "Name",
      sortable: false,
      width: 210,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar src={params.row.icon} sx={{ width: 30, height: 30 }} />
            <span style={{ margin: "0px 10px" }}><Link href={params.row.websiteUrl} style={{textDecoration: 'none',color: 'lightblue'}}>{params.row.name}</Link></span>
            <span>{params.row.symbol}</span>
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      renderCell: (params) => {
        return <>${params.row.price}</>;
      },
      // type: "",
    },
    {
      field: "priceChange1h",
      headerName: "1h%",
      width: 100,
      renderCell: (params) => {
        return <>%{params.row.priceChange1h}</>;
      },
    },
    {
      field: "priceChange1d",
      headerName: "1d%",
      width: 120,
      renderCell: (params) => {
        return <>%{params.row.priceChange1d}</>;
      },
    },
    {
      field: "priceChange1w",
      headerName: "1w%",
      width: 120,
      renderCell: (params) => {
        return <>%{params.row.priceChange1w}</>;
      },
    },
    {
      field: "marketCap",
      headerName: "Marketcap",
      width: 160,
      renderCell: (params) => {
        return <>${params.row.marketCap}</>;
      },
    },
    {
      field: "volume",
      headerName: "Volume",
      width: 160,
      renderCell: (params) => {
        return <>${params.row.volume}</>;
      },
    },
    {
      field: "availableSupply",
      headerName: "Circulating Supply",
      width: 120,
      renderCell: (params) => {
        return <>${params.row.availableSupply}</>;
      },
    },
    {
      field: "websiteUrl",
      headerName: "Info",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <Button>
              <Link href={params.row.websiteUrl} style={{textDecoration: 'none'}}>Info</Link>
            </Button>
          </>
        );
      },
    },
  ];

  const actionColumn2 = [
    {
      field: "action",
      headerName: "",
      width: 30,
      renderCell: () => {
        return <StarOutlineOutlinedIcon color="error" />;
      },
    },
  ];

  const [loading, setloading] = useState(true);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
        setloading(false);
      }
    );
  }, []);

  console.log(listOfCoins);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="Apps">
      <div className="App">
        <SearchAppBar searchbar={searchWord} setSearchWord={setSearchWord} />
        <Coin />
        <Box sx={{ height: 700, width: "100%", color: "whitesmoke" }}>
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            <DataGrid
              getRowId={(listOfCoins) => listOfCoins.id}
              rows={filteredCoins.map((item) => item)}
              columns={actionColumn2.concat(userColumns)}
              pageSize={20}
              rowsPerPageOptions={[20]}
              style={{ color: "whitesmoke" }}
              sx={{
                boxShadow: 2,
                border: 2,
                borderColor: "#212222",
                "& .MuiDataGrid-cell:hover": {
                  color: "success.main",
                },
              }}
            />
          )}
        </Box>
        <Copyright />
      </div>
    </div>
  );
}

export default App;
