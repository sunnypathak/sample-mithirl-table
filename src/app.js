const tableView = {
  view: function () {
    return m("table.f6.w-100.mw8.center", [
      m("thead", m("tr"), [
        m("th.fw6.ba.bg-light-gray", "sr_no"),
        m("th.fw6.ba.bg-light-gray", "location_no"),
        m("th.fw6.ba.bg-light-gray", "order_id"),
        m("th.fw6.ba.bg-light-gray", "ksn_id"),
        m("th.fw6.ba.bg-light-gray", "prc_type_id"),
      ]),
      m(
        "tbody",
        DataHelper.filteredData.map(
          ({ srNo, locationNum, orderId, knsId, prc_type_id }) => {
            return m("tr", [
              m("td.tc.pv2.ph3.ba", srNo),
              m("td.tc.pv2.ph3.ba", locationNum),
              m("td.tc.pv2.ph3.ba", orderId),
              m("td.tc.pv2.ph3.ba", knsId),
              m("td.tc.pv2.ph3.ba", prc_type_id),
            ]);
          }
        )
      ),
    ]);
  },
};

const toolsView = {
  view: function () {
    return m("div.f6.w-100.mw8.center", [
      m("div.fl.w-20.pv5", [
        m(
          "button.f6.link.white.bg-blue.dim.br2.ph3.pa1",
          {
            onclick: () => {
              DataHelper.goToFirstPage();
            },
          },
          "|<<"
        ),
        m(
          "button.f6.link.white.bg-blue.dim.br2.ph3.pa1",
          {
            onclick: () => {
              DataHelper.goToPrevPage();
            },
          },
          "<<"
        ),
        m(
          "button.f6.link.white.bg-blue.dim.br2.ph3.pa1",
          {
            onclick: () => {
              DataHelper.oneRowBack();
            },
          },
          "<"
        ),
      ]),
      m("div.fl.w-60.tc.pv5", [
        m("span.f5", "showing "),
        m("input.tc.w-10.f5", {
          value: DataHelper.noOfRowsPerPage,
          onchange: (e) => {
            DataHelper.setNoOfRowsPerPage(e.target.value);
          },
        }),
        m("span.f5", " rows out of "),
        m("input.tc.w-10.f5", {
          value: DataHelper.totalRecords,
          onchange: (e) => {
            DataHelper.setTotalRecords(e.target.value);
          },
        }),
        m("span.f5", " starting at row "),
        m("input.tc.w-10.f5", {
          value: DataHelper.from,
          onchange: (e) => {
            DataHelper.setFrom(e.target.value);
          },
        }),
      ]),
      m("div.fl.w-20.tr.pv5", [
        m(
          "button.f6.link.white.bg-blue.dim.br2.ph3.pa1",
          {
            onclick: () => {
              DataHelper.oneRowAhead();
            },
          },
          ">"
        ),
        m(
          "button.f6.link.white.bg-blue.dim.br2.ph3.pa1",
          {
            onclick: () => {
              DataHelper.goToNextPage();
            },
          },
          ">>"
        ),
        m(
          "button.f6.link.white.bg-blue.dim.br2.ph3.pa1 ",
          {
            onclick: () => {
              DataHelper.goToLastPage();
            },
          },
          ">>|"
        ),
      ]),
    ]);
  },
};

const app = {
  oninit: DataHelper.onLoad(),
  view: function () {
    return m("div", [m(toolsView), m(tableView)]);
  },
};

m.mount(document.body, app);
