class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root;
    if (!current) {
      this.root = new Node(val);
      return this;
    }
    while (current) {
      if (current.val === val) throw new Error("Same value");

      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        }
        current = current.left;
      }
      if (val > current.val) {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let current = this.root;
    if (!current) {
      this.root = new Node(val);
      return this;
    }

    const insert = (val, current = this.root) => {
      if (val === current.val) throw new Error("Same value");

      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        }
        return insert(val, current.left);
      }
      if (val > current.val) {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        }
        return insert(val, current.right);
      }
    };
    return insert(val);
  }
  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    if (!current) {
      return;
    }
    while (current) {
      if (current.val === val) return current;

      if (val < current.val) {
        if (!current.left) {
          return;
        }
        current = current.left;
      }
      if (val > current.val) {
        if (!current.right) {
          return;
        }
        current = current.right;
      }
    }
    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let current = this.root;
    if (!current) {
      return;
    }

    const find = (val, current = this.root) => {
      if (current.val === val) return current;

      if (val < current.val) {
        if (!current.left) {
          return;
        }
        return find(val, current.left);
      }
      if (val > current.val) {
        if (!current.right) {
          return;
        }
        return find(val, current.right);
      }
      return this;
    };

    return find(val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    const traverse = (node = this.root) => {
      data.push(node.val);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse();

    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    const traverse = (node = this.root) => {
      if (node.left) traverse(node.left);
      console.log("VISITING: ", node.val);
      data.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse();

    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    const traverse = (node = this.root) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      console.log("VISITING: ", node.val);
      data.push(node.val);
    };
    traverse();

    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let data = [];
    let current = this.root;
    if (!current) return;

    let queue = [current];

    while (queue.length) {
      let node = queue.shift();
      data.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
