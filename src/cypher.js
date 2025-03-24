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
        keyword: 'as asc ascending and assert by call case collect commit constraint create csv cypher delete desc descending detach distinct drop else end ends exists explain fieldterminator filter for foreach from headers in index is join let limit load match merge nodetach not on optional order periodic profile remove return scan set skip start starts then union unique unwind use using when where with yield',
        literal: 'true false null',
        $pattern: /(?<=^|\s)[a-zA-Z0-9_\.]+(?=$|\s)/  // allows to better exclude keywords-like matches to be highlighted when not acting as keywords
      },
    contains:
      [
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        hljs.C_NUMBER_MODE,
        {
          className: 'string',
          begin: '`',
          end: '`',
          illegal: '\\n',
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          className: 'type',
          begin: /((-|>)?\s?\(|-\[)\w*:/,
          excludeBegin: true,
          end: '\\W',
          excludeEnd: true,
        },
        {
          className: 'functionCall',
          begin: /(\s+|,)[a-zA-Z0-9_\.]+\(/,
          end: /\)/,
          keywords: {
            built_in: 'all any exists isEmpty none single coalesce elementId endNode head id last length properties randomUUID size startNode timestamp toBoolean toBooleanOrNull toFloat toFloatOrNull toInteger toIntegerOrNull type valueType avg collect count max min percentileCont percentileDisc stDev stDevP sum extract filter keys labels nodes range reduce relationships reverse tail toBooleanList toFloatList toIntegerList toStringList abs ceil floor isNaN rand round sign e exp log log10 sqrt acos asin atan atan2 cos cot degrees haversin pi radians sin tan left ltrim replace reverse right rtrim split substring toLower toString toStringOrNull toUpper trim date datetime localdatetime localtime time duration duration duration duration duration point linenumber file graph db cdc char_length character_length'
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

