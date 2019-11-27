export function chunkData(i, size, data) {
  let chunks = [];
  while (i < data.length) chunks.push(data.slice(i, (i += size)));
  return chunks;
}

export function sumChunkData(data) {
  return data.map(data => {
    return data.reduce(
      (reducedData, item) => {
        return {
          tradeCount: reducedData.tradeCount + item.tradeCount,
          baseVolume: reducedData.baseVolume + item.baseVolume,
          counterVolume: reducedData.counterVolume + item.counterVolume,
          avg: reducedData.avg + item.avg,
          high: reducedData.high + item.high,
          low: reducedData.low + item.low,
          open: reducedData.open + item.open,
          close: reducedData.close + item.close
        };
      },
      {
        tradeCount: 0,
        baseVolume: 0,
        counterVolume: 0,
        avg: 0,
        high: 0,
        low: 0,
        open: 0,
        close: 0
      }
    );
  });
}
