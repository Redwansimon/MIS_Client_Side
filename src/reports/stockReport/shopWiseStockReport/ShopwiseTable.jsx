import React from 'react'

export const ShopwiseTable = ({showTable,shops,reportData,selectedShop}) => {

    console.log({reportData})

  return (
    <>
    {/* REPORT HEADER */}

      {showTable && reportData.length > 0 && (
        <>
          <div className="text-center mt-6">

            <h1 className="text-2xl font-bold tracking-wide text-slate-800">
              MBRELLA
            </h1>

            <p className="text-xs text-slate-500 mt-1">
              HOUSE: 19, ROAD: 03, SECTOR: 03, UTTARA, DHAKA-1230, BANGLADESH
            </p>

            <h2 className="text-lg font-bold mt-3 text-slate-700 uppercase">
              Shop Wise Summarised Stock Report
            </h2>

          </div>

          {/* TABLE */}

          <div className="overflow-x-auto mt-6">

            <table className="w-full text-xs">

              <thead className="bg-slate-100">

                <tr>
                  <th
                    colSpan={6}
                    className="border border-slate-300 px-2 py-2 text-left"
                  >
                    SHOP NAME : {selectedShop}
                  </th>
                </tr>

                <tr>

                  <th className="border border-slate-300 px-2 py-2 text-left">
                    P. Group
                  </th>

                  <th className="border border-slate-300 px-2 py-2 text-left">
                    Product Name
                  </th>

                  <th className="border border-slate-300 px-2 py-2 text-center">
                    No Of Design
                  </th>

                  <th className="border border-slate-300 px-2 py-2 text-right">
                    Curr. Bal
                  </th>

                  <th className="border border-slate-300 px-2 py-2 text-right">
                    Cost Value
                  </th>

                  <th className="border border-slate-300 px-2 py-2 text-right">
                    MRP Value
                  </th>

                </tr>

              </thead>

              <tbody>

                {(reportData || []) .map((groupData, groupIndex) => (
                  <React.Fragment key={groupIndex}>

                    {(groupData.items || []).map((item, itemIndex) => (

                      <tr
                        key={itemIndex}
                        className="hover:bg-slate-200"
                      >

                        <td className="border border-slate-300 px-4 py-2">
                          {groupData.group}
                        </td>

                        <td className="border border-slate-300 px-4 py-2">
                          {item.product_name}
                        </td>

                        <td className="border border-slate-300 px-4 py-2 text-center">
                          {item.no_of_design}
                        </td>

                        <td className="border border-slate-300 px-4 py-2 text-right">
                          {item.curr_bal}
                        </td>

                        <td className="border border-slate-300 px-4 py-2 text-right">
                          {item.cost_value.toLocaleString()}
                        </td>

                        <td className="border border-slate-300 px-4 py-2 text-right">
                          {item.mrp_value.toLocaleString()}
                        </td>

                      </tr>

                    ))}

                 

                    {/* GROUP TOTAL */}

                    <tr className="bg-slate-100 font-bold">

                      <td
                        colSpan={2}
                        className="border border-slate-300 px-2 py-2 text-right"
                      >
                        GRP-TOTAL
                      </td>

                      <td className="border border-slate-300 px-2 py-2 text-center">
                        {
                          groupData.items.reduce(
                            (total, item) => total + item.no_of_design,
                            0
                          )
                        }
                      </td>

                      <td className="border border-slate-300 px-2 py-2 text-right">
                        {
                          groupData.items
                            .reduce((total, item) => total + item.curr_bal, 0)
                            .toLocaleString()
                        }
                      </td>

                      <td className="border border-slate-300 px-2 py-2 text-right">
                        {
                          groupData.items
                            .reduce((total, item) => total + item.cost_value, 0)
                            .toLocaleString()
                        }
                      </td>

                      <td className="border border-slate-300 px-2 py-2 text-right">
                        {
                          groupData.items
                            .reduce((total, item) => total + item.mrp_value, 0)
                            .toLocaleString()
                        }
                      </td>

                    </tr>

                  </React.Fragment>
                ))}

              </tbody>

            </table>

          </div>
        </>
      )}
    </>
  )
}
