/**
 * Language: Cypher
 * Contributors:
 *   Johannes Wienke <languitar@semipol.de>
 *   Gustavo Reis <gusbemacbe@gmail.com>
 */
module.exports = function (hljs)
{
  return {
    case_insensitive: true,
    keywords:
      {
        keyword: 'as asc ascending assert by call case commit constraint create csv cypher delete desc descending detach distinct drop else end ends explain fieldterminator foreach from headers in index is join limit load match merge on optional order periodic profile remove return scan set skip start starts then union unique unwind using when where with yield',
        literal: 'true false null'
      },
    contains:
      [
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        hljs.C_NUMBER_MODE,

        {
          className: 'type',
          begin: /((-|>)?\s?\(|-\[)\w*:/,
          excludeBegin: true,
          end: '\\W',
          excludeEnd: true,
        },
        {
          className: 'functionCall',
          begin: /(\s+|,)\w+\(/,
          end: /\)/,
          keywords: {
            built_in: 'all any exists none single coalesce endNode head id last length properties size startNode timestamp toBoolean toFloat toInteger type avg collect count max min percentileCont percentileDisc stDev stDevP sum extract filter keys labels nodes range reduce relationships reverse tail abs ceil floor rand round sign e exp log log10 sqrt acos asin atan atan2 cos cot degrees haversin pi radians sin tan left ltrim replace reverse right rtrim split substring toLower toString toUpper trim distance'
          }
        },
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.C_LINE_COMMENT_MODE,
        {
          begin: '//',
          ends: '//',
        }
      ]
  }
}

