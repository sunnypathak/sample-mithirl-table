const DataHelper = {
  data: [],
  filteredData: [],
  from: 1,
  noOfRowsPerPage: 10,
  totalRecords: 1000000,
  onLoad: () => {
    for (let i = 1; i <= DataHelper.totalRecords; i++) {
      DataHelper.data.push({
        srNo: i,
        locationNum: 1000 + i,
        orderId: Math.floor(1000 + Math.random() * 9000),
        knsId: Math.floor(1000 + Math.random() * 9000),
        prc_type_id: Math.floor(1000 + Math.random() * 9000),
      });
    }
    DataHelper.filterData();
  },

  filterData: () => {
    to = Math.min(
      DataHelper.from + DataHelper.noOfRowsPerPage,
      DataHelper.totalRecords + 1
    );
    DataHelper.filteredData = [];
    for (let i = DataHelper.from - 1; i < to - 1; i++) {
      DataHelper.filteredData.push(DataHelper.data[i]);
    }
  },
  goToNextPage: () => {
    from = DataHelper.from + DataHelper.noOfRowsPerPage;

    if (from > DataHelper.totalRecords) return;
    DataHelper.from = from;
    DataHelper.filterData();
  },
  goToPrevPage: () => {
    DataHelper.from = Math.max(1, DataHelper.from - DataHelper.noOfRowsPerPage);
    DataHelper.filterData();
  },
  goToLastPage: () => {
    DataHelper.from = DataHelper.totalRecords - DataHelper.noOfRowsPerPage + 1;
    DataHelper.filterData();
  },
  goToFirstPage: () => {
    DataHelper.from = 1;
    DataHelper.filterData();
  },
  oneRowBack: () => {
    DataHelper.from = Math.max(1, DataHelper.from - 1);
    DataHelper.filterData();
  },
  oneRowAhead: () => {
    if (DataHelper.from + 1 > DataHelper.totalRecords) return;
    DataHelper.from = Math.min(DataHelper.from + 1, DataHelper.totalRecords);
    DataHelper.filterData();
  },
  setFrom: (from) => {
    DataHelper.from = parseInt(from);
    DataHelper.filterData();
  },
  setNoOfRowsPerPage: (recordsPerPage) => {
    DataHelper.noOfRowsPerPage = parseInt(recordsPerPage);
    DataHelper.filterData();
  },
  setTotalRecords: (totalRecords) => {
    DataHelper.totalRecords = parseInt(totalRecords);
    DataHelper.onLoad();
  },
};
