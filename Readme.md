# getir-case-study

## Endpoints
`POST /records`
</br>
<h4>Parameters</h4>
<table>
<thead>
<tr>
<th align="left">Name</th>
<th align="center">Type</th>
<th align="left">Description</th>
<th align="left">Required</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">startDate</td>
<td align="center">string</td>
<td align="left">Start date of records, Format : YYYY-MM-DD</td>
<td align="left">Required</td>
</tr>
<tr>
<td align="left">endDate</td>
<td align="center">string</td>
<td align="left">Finish date of records, Format : YYYY-MM-DD</td>
<td align="left">Required</td>
</tr>
<tr>
<td align="left">minCount</td>
<td align="center">string, integer</td>
<td align="left">Minimum number of total count</td>
<td align="left">Required</td>
</tr>
<tr>
<td align="left">maxCount</td>
<td align="center">string, integer</td>
<td align="left">Maximum number of total count</td>
<td align="left">Required</td>
</tr>
</tbody>
</table>
</br>
<h4>Response</h4>

```
{
"code":0,
"msg":"Success",
"records":[
        {
            "key": "zeDf4lNE2wBKZSSg",
            "createdAt": "2017-01-01T05:55:36.281Z",
            "totalCount": 2700
        },
        {
            "key": "LBM3PSG8JKx8YgWk",
            "createdAt": "2017-01-01T07:13:54.115Z",
            "totalCount": 2800
        }
]
}
```
