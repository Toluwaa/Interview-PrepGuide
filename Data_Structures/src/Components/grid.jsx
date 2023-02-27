import React from "react";
import Event from "./Events";

const Grid = () => {
  return (
    <div className="grid">
      <div className="container">
        <div className="card">
          <div className="pic">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20220721080308/array.png"
              alt="array"
            />
          </div>
          <Event title="Arrays" />
          <a
            href="https://www.geeksforgeeks.org/array-data-structure/"
            target="blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20220820132424/Strings.png"
            alt="string"
          />
          <Event title="Strings" />
          <a
            href="https://www.geeksforgeeks.org/string-data-structure/"
            target="_blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAABI1BMVEX///8AAADe3d6GhYZTUlOpqKn08/S3trcxMDEiISLw7/DT0tPr6uuLiYtoZ2iRkJIsKywSERLX1tf/+//iAFLlAFftVJTZjKn4pM7TAFj35e39yenTAF/uXZnnocD81vLoQIPaAE3SQHnowNLgpsD/5/jiAE7aeaLpssv/9//OGmjQHWLvdanlBWPYAEZbWVtlY2XBwMF1c3VDQkOzsbOdm50+PT7/3/XkAFz/8P/TAE79vdwbGRt+fH5MSkzmmLns1OHqfKnMAE72rtPiZ5nDNW3+yO3uQo30l8Txw9rrZ6Tw2eTsnLzkjq/YYY740ePbapXdSYPgFGrpLX7HQHfdJm7cVIvzgrjWfp/+veH5rdLTZY/6oNPTMHL0b6nou9LDADz864VTAAANZklEQVR4nO2cC1vaSBfHZwIEIeEeXBEVqZqKLZcEw62C2nbrZV1tsWq3Xdv3+3+K98wkUUxCSCKsLDv/xwfJkDkz88uZOTNDAkJMTExMTExMTExMTExMTExMTO7a2T08/LU6+bzVrSOH1MrWUW5cjqOt8WZzW1s5L+fNqXLHvZok1d5/owcVlzNXavcOqUW5YLY5Z+W3XNsYa22n83718bzfHqpjsZGzGZ0PHcs3H0qllWqZ1Pzj2u74M1ekVw6pxfya2fyPhe2nn61LLtiqhUdskomttPb7U0zHhd/QHGqnU2iT/5+ktQq57NvjT52IzeZc/rEV5bWn2N7Kr8fX6OVUMlmclLcQOj3fGn/qRGyn52dPP/OPrX1+bMEmzSe2/L1ez7uOS/+kmojNJv/YbJpTbDvVno5rpwsvuxd/wLuLbdT+8/Kb3qrd17ffwAXPtnVsFxs0alxdmG45gm334gihrpEbDJnYri42qKHL19v0EuW2P19utx2xkdwgMPCDnHt2sZn/cnGx+pgyL7qT1x47Jh3bYHw57g3zEnXDj7W15WH522l5r0KxXdco5fOH2FeUno5tJXntlOTeA7zrMuHVHdYOwVC5c9Mpf6U2JWnYu+k4j21v4Ix3hfLNsPYVKjes5qs3e0eoqKfMD7fKifQYANclgi3f+XKVK3Z6R9Ax5dsK6i5Lww8V3dvuZDJTyV2Xr4wsoyGBOFcpn9+8QpB7y8S2Lt8CCfmmjbon5W0K9gzt/Mw7YssDtsq19B3l7mh4eisfk/Tr8oaZMieqnMu9b8Z7HRsNqmiTxIhrwg7ixiUyxra/ZDLAtTtr5gzPjo1+dF3eNbCdyiThrfwnpH6Xf5CEz2hsJCXYdqj1SocUqkfSSqcAr93q15mS8Kk7qfxDd38D2x45Iti6nTckuTIkXYdigyatEt+5NTPbsb3RcxvYivkeia/LxM+gD4KJnxL0WTds3WrhiFSL5NOx5Yb08p1Oilr/rP6W8q+o91ix7eT1hcFmoWJGUuqEd9R3qNyxbXeHEj2VZoP+eW+c5oYN/ZTvzc+MedudvDeH66+/qvnfCTcbNtPb1h6w3cngK8u9hzDiju3wVurtkM82pde727vH8h55SxxvDDaJ5K6cyG+MAgxsIynzpGI1D6OODRuMbWQi0aYDmo6tKF9CbHycq7liyw+r1zqSzfz15ubmycmtF2yo8lPu6VM+c5WQ+yn1DmdJIJg+5d9fOWBbkb9WUO6ceJiBrdvZgxDxMLRNwFbe+ESnInD8y8zhik3PDYXly5TX4+JqpVM2I9fLq7JhXMNz6ZsDNhhmCq+GtVuSYKwS1nurK49Dmzs26TN5t/1gjW5weMKGikO6uTCySijpKXOhorxnXF7ofHZs3S+bx+vH7+gpBrbT2q+35cdxZkJIIJOOe2R629XNpZeQsLpK3xYqD96mp4zMkF9Y3WpPn7g6Y1t/33041cBWkj/TwGpo0gQE4gkxZE5A7skEhPiqC7Z3+jxymUypdWxnesp6eW7CwjmdypKqH9qxVapru39UjG5jYOsOh53HoY1gMxk6Y4Pp7SUJwKT538l8D8ZL5IqtqK/rlstHJrYSicBzha1d7Vz+Ojq71ReRVm+760i9ws0tXb+bOyDr+fxITIO+tLFLtIqWZUds7Q6E46JU2O1e3cAaCbWlwuHO2ZfRxVX+8hcx8cuIpMvlHzvdDWroVL6/OsqBJUj5nn/jtvv8z6p4LdfKNXmT7FbqS/kaxXZdA2zt4ebdz5NqjUw2zU3xFal3NZJdlmpUvxlL+dqannv3Yd/yZw085jRf65Wlj+Szv6Vaubw8uileLlMT76FswmrnRC73akNSSnso1/53BKvZh5R5Ua54erpSom/bRWhKpUhrd1WsoFKBtrN7StaS3SLdB4bpx9rIRa8UDa0+yV06qxjmSEYKYMUsBZVWVq5ypbOH/Yy2YeLKzE2q9E4vpPvh7+/k3WPK/Gu5oEeEynBkh3JlZNbG5KDcTUHf5v5gxA149+WmXJinvjKPOpV7rz6//gykjsyU4eZx+yWr9K/Qh/VhtVO9Pt556Yr825Trdv8tIzETExMTExMTExMTExMTExMTExPTf1k8R145jhORKBqHcSHLkyRII4cc/yRHXHyBas6bUhheOIyxijBWkAKHIThKZuEFD0QsIBGSRyTi+gtVdZ6k6dgEeD1IHyABoyjeB69DKILB5XAWxSm2fVCWZGgdNF60wu7KQlcgnSSbJZUVSGeBt/ykbL5lYEunIwjv4wRg68dQRIuY2GLpGMUWCoX65L8a6j/X2+LQkCw0KEuuFWkj9+xWPAiHEMqoqIljGRG6DjRBJN1Gm14JugxsEUFEWFEwHIYOkLaUNrFpyj7Bxg+agxawVPD+oJV9XpEKpmMCtAe4ZfpoaYq9HqcQSvfRIEkOwv1YhI4xEdqbpikNZzmRw1G46jiK6hhDq1J8/wGbObaRCBGHJqtq+iD63EJDYB6lWg1oXCyEmsnnN8MUuSLgcQN8kIbRJau1oPpRxOPI9Iqg0sj4L9LLH1OQeBADXhlIgtGMenjWGhJQ//mtpNgymgAlTBubymVj4G1h6PkaHrQwR6pP0C2ACDYFtwbgBNPGlqCdtDkQhByuR6OZfhynlBaeflB4AYXApxvpaDS8RLGFBWFac8EWDP71FFJbS0tKGga01EBstpqhxZhqanXE0wCTFusaaWNMmZyJiYmJiSmbCC2ulCmuq56ILqkWV60ZYYvjGLewUvBgZtjSM7I8B+IYtiDicHhGlhm2QFpobNmZbbAzbIG04Nhm9b3EQmMTGLYgEvAUdyifiGELpAXHps7IMsMWSAxbIC00NgX3Z2R5wbGFZmSZYQukBceWmJHlhcYWZdiCKEpuEJqJGLZAWmhs+wxbEDFsgRSZ/t2hhhi2QGLYAolhC6QFxzbtW5FNMWyBtNDYNPLAzUzELza2adz4HnFSuO6U6n6LsKMhZ014PET0Ycr1XjXBKUcDq07JPu+G93FfmOv3i7wPQxM2vAQfplw7XMiHobg/bBnvll2/KPODbcLOjR9srh0u4cOQf2xa1IP6HrBFvBhqeMEW82JJaU3G1lA8GIoEwubp4bmIB2yeik55wbbkxRJ5yG0SNk/Lds91f1QGe3uAzws2T4/LJLxg8xbJw5OxedrJjTNs/orSxbD5LEoXw+azKF0Mm8+idDFsPovSxbD5LEoXw+azKF0Mm8+idDFsPovSNT1stn0UN2ykyDHYRNFqybUt9JduHLHxor1hrtgU3rmoOGczZMXmAaEztpZtMeeCTaA/EeOELXWAbQ9PuGHjMweiIzY+Ceab1s01N2wcFOxQlDAAQ3ULFws20cO2uSM21b4GdsEmZnDWEVsdDyJR6+amq7cpeIl3wpbCdSFke1jK1dtSWHUoSsX9SNN6G6oFG9/CE3+0wQnbPh74wUa4cQ7YBMfHdNwHnH1g44AtAfVR/GFDfZxxKIoj18byaCTBNjqW8EsTx3sHbBwOaU7YWqkx0uo4lrVjg7bWY2GrdcAWXhqrFsaNrB2buIRJGZbU8CRTzlcoaf2mlGB70h514m6aA7b0Eni49TvYyITd0f2MDRuMR41Gxg4TD2JjlcY44oCN7NLZb1UOu5lKx8ZgC9me+gZsB9Zd7gnDmx2bihPRBm5Yujdgq5MfdnNUGkqxe1uSVLph3e5376QqXC+HThrCDU712UlbuOlUVB8PrMGdeJsw0hzOPkZZZccW03FbLonb2NaAtjqMbSnyXUvdFzaVuJQDthgZe2LWAlyxNXHUaSO57vAFkHVsC02+B9+OLS6K8RAOWS6JC7YoKcUBmwi1TjiMeC7Y6A9dOWALY1UBCLbU8dhEuJQORYVxpq+qquUHQ59GUi/PADrP2xzHtrHeRsYBpwmIsITxkkNIGI+NNscBm1gH8wM/8zYyZ3UoKuP0PZV1uuvh++fZLq54+7e2ARdXfNxuav4WVzb9p9ak+zw3YcL7bGxGb54CNsXIPwVs2oSinsqGLSwqE0Kpb2yRiNqHBZCqcnwC8SEB92n+ANj2I6oqIk5VBQQWE9m0qkPwjy2uJZIQsDUV1hIK/CXSCR75xKbbUATEp1B9+tjC+0iL8E2YuCMtlRRQWh9zAmAjjVRRS0Qx+J+KINWYmfvHJmbiYETTyN9AGSAhaSnKXXQCIoLDpZEWRfHBLLDVRaRoQlpVwzxqwszDaGEQbBzikmJGVQciUgf0mCoANqhamE821EYKZh4cyqqWotylY4NZRziuKYifHTaRLoaj/ToHV5kqCLYsYNOxZxt95TnYoMkDPkQPGloDZYN4G7ER1/ZRtjkLbEmCDUUGjb4YRvEm0po06ATAFgJvU5HSbDT4Jg9XWmnpC8EA2MC76jzfqIcFLYIiKdRK+h7biMc24mIrqSahjcqE+6LZBITN23wXpSsYtqndqPXfwibwHqR5wMZ5sEPuDPWAzUuVvGALIQ+GuEDYvIrdhPooH5andsvzP4Vthrc818NeNXBtLe/ZTngwYcOZa3o35brijgy8V2ohfm6eiYmJiYmJiYmJiYmJiYmJiYmJiYmJieml9H9N27mI98k8OAAAAABJRU5ErkJggg=="
            alt="linked lists"
          />
          <Event title="Singly Linked Lists" />
          <a
            href="https://www.geeksforgeeks.org/what-is-linked-list/"
            target="blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219100314/stack.drawio2.png"
            alt="stack"
          />
          <Event title="Stack" />
          <a
            href="https://www.geeksforgeeks.org/stack-data-structure/"
            target="blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png"
            alt="Queue"
          />
          <Event title="Queue" />
          <a
            href="https://www.geeksforgeeks.org/queue-data-structure/"
            target="blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://miro.medium.com/max/1400/1*IBtDZq0_4yWpXt0mhda0jw.png"
            alt="graph"
          />
          <Event title="Graph" />
          <a
            href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
            target="blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://i0.wp.com/learnersbucket.com/wp-content/uploads/2019/09/Circular-linked-list-1.png?fit=768%2C400&ssl=1"
            alt="cll"
          />
          <Event title="Circular linked List" />
          <a
            href="https://www.geeksforgeeks.org/circular-linked-list/"
            target="blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Binary_tree_v2.svg/640px-Binary_tree_v2.svg.png"
            alt="binary tree"
          />
          <Event title="Binary Tree" />
          <a
            href="https://www.geeksforgeeks.org/binary-tree-data-structure/"
            target="blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://static.javatpoint.com/ds/images/binary-search-tree1.png"
            alt="bst"
          />
          <Event title="Binary Search Tree" />
          <a
            href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/"
            target="blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/10/max-and-min-heap-1.png?fit=768%2C500&ssl=1"
            alt="heap"
          />
          <Event title="Heap" />
          <a
            href="https://www.geeksforgeeks.org/heap-data-structure/"
            target="blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg/1200px-Hash_table_3_1_1_0_1_0_0_SP.svg.png"
            alt="hashing"
          />
          <Event title="Hashing" />
          <a
            href="https://www.geeksforgeeks.org/hashing-data-structure/"
            target="blank"
          >
            <button>Start Here</button>
          </a>
        </div>
        <div className="card">
          <img
            src="https://static.javatpoint.com/ds/images/sparse-matrix7.png"
            alt="matrix"
          />
          <Event title="Matrix" />
          <a href="https://www.geeksforgeeks.org/matrix/" target="blank">
            <button>Start Here</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Grid;
