class PowerOfTwoMaxHeap {
    constructor(x) {
      this.heap = [];
      this.x = x;
    }
  
    /**
     * 
     * @param {*} value 
     */
    insert(value) {
      this.heap.push(value); 
      this._siftUp(this.heap.length - 1); 
    }
  
    /**
     * 
     * @returns {*} 
     */
    popMax() {
      if (this.heap.length === 0) {
        return undefined; 
      }
  
      const max = this.heap[0]; 
      this.heap[0] = this.heap[this.heap.length - 1]; 
      this.heap.pop(); 
      this._siftDown(0); 
  
      return max; 
    }
  
    /**
     * 
     * @param {number} index 
     */
    _siftUp(index) {
      const parent = Math.floor((index - 1) / this.x); 
  
      
      while (index > 0 && this.heap[index] > this.heap[parent]) {
        [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
        index = parent;
        parent = Math.floor((index - 1) / this.x); 
      }
    }
  
    /**
     * 
     * @param {number} index
     */
    _siftDown(index) {
      let maxChildIndex = this._getMaxChild(index); 
  
      
      while (maxChildIndex !== -1 && this.heap[index] < this.heap[maxChildIndex]) {
        [this.heap[index], this.heap[maxChildIndex]] = [this.heap[maxChildIndex], this.heap[index]];
        index = maxChildIndex;
        maxChildIndex = this._getMaxChild(index); 
      }
    }
  
    /**
     * 
     * @param {number} index 
     * @returns {number} 
     */
    _getMaxChild(index) {
      const startChild = this.x * index + 1;
      const endChild = Math.min(startChild + this.x, this.heap.length);
  
      let maxChildIndex = -1;
      let maxChildValue = -Infinity;
  
      for (let i = startChild; i < endChild; i++) {
        if (this.heap[i] > maxChildValue) {
          maxChildIndex = i;
          maxChildValue = this.heap[i];
        }
      }
  
      return maxChildIndex;
    }
  }  