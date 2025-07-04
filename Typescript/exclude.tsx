type Eventt = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Eventt, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK