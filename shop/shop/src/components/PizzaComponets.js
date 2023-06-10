import React, { useEffect } from "react";
import "../App.css";

function PizzaComponent() {
  useEffect(() => {
    document.getElementById("defaultTab").click();
  }, []);

  const itemsPerPage = 2;

  function openTab(evt, tabName) {
    // 탭 콘텐츠를 숨김
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // 활성 탭 버튼 스타일 변경
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";

    // 선택한 탭 콘텐츠 표시
    document.getElementById(tabName).style.display = "block";

    // 메뉴 항목 로드 및 페이징
    var menuItems;
    switch (tabName) {
      case "all":
        menuItems = db.getAllMenuItems();
        setupPagination(
          menuItems,
          itemsPerPage,
          "allMenuItems",
          "allPagination"
        );
        // addSortingButton(); // '모두' 탭을 클릭했을 때 정렬 버튼 추가
        // addIncreaseSortingButton();
        // addDecreaseSortingButton();
        break;
      case "craftsmanship":
        menuItems = db.getCraftsmanshipMenuItems();
        setupPagination(
          menuItems,
          itemsPerPage,
          "craftsmanshipMenuItems",
          "craftsmanshipPagination"
        );
        removeSortingButton(); // '모두' 탭이 아닌 경우 정렬 버튼 제거
        removeIncreaseSortingButton();
        removeDecreaseSortingButton();

        break;
      case "expert":
        menuItems = db.getExpertMenuItems();
        setupPagination(
          menuItems,
          itemsPerPage,
          "expertMenuItems",
          "expertPagination"
        );
        removeSortingButton(); // '모두' 탭이 아닌 경우 정렬 버튼 제거
        removeIncreaseSortingButton();
        removeDecreaseSortingButton();
        break;
      case "luxury":
        menuItems = db.getLuxuryMenuItems();
        setupPagination(
          menuItems,
          itemsPerPage,
          "luxuryMenuItems",
          "luxuryPagination"
        );
        removeSortingButton(); // '모두' 탭이 아닌 경우 정렬 버튼 제거
        removeIncreaseSortingButton();
        removeDecreaseSortingButton();
        break;
    }
    addPizzaImageEvent();
  }

  function setupPagination(
    menuItems,
    itemsPerPage,
    menuContainerId,
    paginationContainerId
  ) {
    var menuContainer = document.getElementById(menuContainerId);
    var paginationContainer = document.getElementById(paginationContainerId);

    // 페이지 수 계산
    var totalPages = Math.ceil(menuItems.length / itemsPerPage);

    // 페이지 번호 버튼 생성
    paginationContainer.innerHTML = "";
    for (var i = 1; i <= totalPages; i++) {
      var button = document.createElement("button");
      button.innerHTML = i;
      button.addEventListener("click", function () {
        showMenuItems(menuItems, this.innerHTML, itemsPerPage, menuContainer);
      });
      paginationContainer.appendChild(button);
    }

    // 초기 페이지 표시
    showMenuItems(menuItems, 1, itemsPerPage, menuContainer);
  }

  function showMenuItems(menuItems, page, itemsPerPage, menuContainer) {
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var currentPageItems = menuItems.slice(startIndex, endIndex);

    // 메뉴 컨테이너 내용 비우기
    menuContainer.innerHTML = "";

    // 현재 페이지 항목 표시
    for (var i = 0; i < currentPageItems.length; i++) {
      var menuItem = currentPageItems[i];

      var menuItemDiv = document.createElement("div");
      // menuItemDiv.className = "menu-item-image";

      var menuItemImage = document.createElement("img");
      menuItemImage.src = menuItem.imageSrc;
      menuItemImage.className = "menu-item-image";
      menuItemDiv.appendChild(menuItemImage);

      var menuItemName = document.createElement("name");
      menuItemName.innerHTML = menuItem.name;
      menuItemName.className = "menu-item-name";
      menuItemDiv.appendChild(menuItemName);

      var menuItemPrice = document.createElement("price");
      menuItemPrice.innerHTML =
        "L: " + menuItem.price + "원 R: " + (menuItem.price - 4500) + "원";
      menuItemDiv.appendChild(menuItemPrice);

      menuContainer.appendChild(menuItemDiv);
    }
    addPizzaImageEvent();
    addSortingButton(); // '모두' 탭을 클릭했을 때 정렬 버튼 추가
    addIncreaseSortingButton();
    addDecreaseSortingButton();
  }

  function addPizzaImageEvent() {
    var pizzaImages = document.getElementsByClassName("menu-item-image");
    for (let i = 0; i < pizzaImages.length; i++) {
      var reviewButton = document.createElement("button");
      var detailButton = document.createElement("button");
  
      pizzaImages[i].addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)"; // 이미지 확대
        reviewButton.innerHTML = "리뷰보기 " + i; // 페이지 번호 증가
        reviewButton.className = "review-button";
        reviewButton.style.position = "absolute";
        reviewButton.style.top = "60px";
        reviewButton.style.left = "100px";
        reviewButton.style.zIndex = "1";
        this.parentNode.style.position = "relative";
        this.parentNode.appendChild(reviewButton);
  
        detailButton.innerHTML = "상세보기";
        detailButton.className = "detail-button";
        detailButton.style.position = "absolute";
        detailButton.style.top = "100px";
        detailButton.style.left = "100px";
        detailButton.style.zIndex = "1";
        this.parentNode.style.position = "relative";
        this.parentNode.appendChild(detailButton);
        // alert("You clicked on a pizza image!");
      });
  
      pizzaImages[i].addEventListener("mouseout", function () {
        this.style.transform = "scale(1)"; // 이미지 축소
        // reviewButton.remove();
      });
    }
  }
  
  

  function addSortingButton() {
    var sortingButton = document.createElement("sortingButton");
    sortingButton.innerHTML = "정렬";
    // sortingButton.addEventListener("click", toggleSorting);
    document.getElementById("allMenuItems").appendChild(sortingButton);
  }

  function removeSortingButton() {
    var sortingButton = document.getElementById("sortingButton");
    if (sortingButton) {
      sortingButton.remove();
    }
  }

  function addIncreaseSortingButton() {
    var increaseSortingButton = document.createElement("button");
    increaseSortingButton.innerHTML = "가격높은순";
    increaseSortingButton.addEventListener("click", function () {
      var menuContainer = document.getElementById("allMenuItems");
      var paginationContainer = document.getElementById("allPagination");
      var menuItems = db.getAllMenuItems();

      // 가격이 높은 순으로 정렬
      menuItems.sort(function (a, b) {
        // 가격이 같을 경우 가나다 순으로 정렬
        if (b.price === a.price) {
          return a.name.localeCompare(b.name);
        }
        return b.price - a.price;
      });

      setupPagination(menuItems, itemsPerPage, "allMenuItems", "allPagination");
      showMenuItems(menuItems, 1, itemsPerPage, menuContainer);

      // // 다시 이벤트 추가
      // addPizzaImageEvent();
      // addSortingButton();
      // addIncreaseSortingButton();
      // addDecreaseSortingButton();
    });

    document.getElementById("allMenuItems").appendChild(increaseSortingButton);
  }

  function removeIncreaseSortingButton() {
    var sortingButton = document.getElementById("sortingButton");
    if (sortingButton) {
      sortingButton.remove();
    }
  }

  function addDecreaseSortingButton() {
    var sortingButton = document.createElement("button");
    sortingButton.innerHTML = "가격낮은순";
    sortingButton.addEventListener("click", function () {
      var menuContainer = document.getElementById("allMenuItems");
      var paginationContainer = document.getElementById("allPagination");
      var menuItems = db.getAllMenuItems();

      // 가격이 낮은 순으로 정렬
      menuItems.sort(function (a, b) {
        // 가격이 같을 경우 가나다 순으로 정렬
        if (a.price === b.price) {
          return a.name.localeCompare(b.name);
        }
        return a.price - b.price;
      });

      setupPagination(menuItems, itemsPerPage, "allMenuItems", "allPagination");
      showMenuItems(menuItems, 1, itemsPerPage, menuContainer);

      // // 다시 이벤트 추가
      // addPizzaImageEvent();
      // addSortingButton();
      // addIncreaseSortingButton();
      // addDecreaseSortingButton();
    });

    document.getElementById("allMenuItems").appendChild(sortingButton);
  }

  function removeDecreaseSortingButton() {
    var sortingButton = document.getElementById("sortingButton");
    if (sortingButton) {
      sortingButton.remove();
    }
  }

  // 가상 데이터베이스
  var db = {
    getAllMenuItems: function () {
      // 전체 메뉴 항목 반환 (가상 데이터)
      return [
        {
          name: "쉬림프&핫치킨골드피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp9D88.png",
          price: 34500,
        },
        {
          name: "날개피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpE586.png",
          price: 34500,
        },
        {
          name: "어깨피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpAF7B.png",
          price: 31500,
        },
        {
          name: "꿈을피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp14B4.png",
          price: 31500,
        },
        {
          name: "팔도피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp1BF5.png",
          price: 31500,
        },
        {
          name: "쏘핫피자 1단게",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpF2A6.png",
          price: 31500,
        },
        {
          name: "쏘핫피자 2단게",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpF2A6.png",
          price: 31500,
        },
        {
          name: "쏘핫피자 3단계",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpF2A6.png",
          price: 31500,
        },
        {
          name: "대세피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpB81B.png",
          price: 31500,
        },
        {
          name: "웃음꽃피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp4608.png",
          price: 29000,
        },
        {
          name: "전주불백피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp579C.jpg",
          price: 29000,
        },
        {
          name: "팔자피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp7A7B.png",
          price: 29000,
        },
      ];
    },
    getCraftsmanshipMenuItems: function () {
      // 장인피자 메뉴 항목 반환 (가상 데이터)
      return [
        {
          name: "쉬림프&핫치킨골드피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp9D88.png",
          price: 34500,
        },
        {
          name: "날개피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpE586.png",
          price: 34500,
        },
      ];
    },
    getExpertMenuItems: function () {
      // 달인피자 메뉴 항목 반환 (가상 데이터)
      return [
        {
          name: "어깨피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpAF7B.png",
          price: 31500,
        },
        {
          name: "꿈을피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp14B4.png",
          price: 31500,
        },
        {
          name: "팔도피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp1BF5.png",
          price: 31500,
        },
        {
          name: "쏘핫피자 1단게",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpF2A6.png",
          price: 31500,
        },
        {
          name: "쏘핫피자 2단게",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpF2A6.png",
          price: 31500,
        },
        {
          name: "쏘핫피자 3단계",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpF2A6.png",
          price: 31500,
        },
        {
          name: "대세피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmpB81B.png",
          price: 31500,
        },
      ];
    },
    getLuxuryMenuItems: function () {
      // 명품피자 메뉴 항목 반환 (가상 데이터)
      return [
        {
          name: "웃음꽃피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp4608.png",
          price: 29000,
        },
        {
          name: "전주불백피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp579C.jpg",
          price: 29000,
        },
        {
          name: "팔자피자",
          imageSrc: "https://img.pizzaalvolo.co.kr/uploads/tmp7A7B.png",
          price: 29000,
        },
      ];
    },
  };

  return (
    <div className="App">
      <div className="tab">
        <button
          className="tablinks"
          id="defaultTab"
          onClick={(e) => openTab(e, "all")}
        >
          모두
        </button>
        <button
          className="tablinks"
          onClick={(e) => openTab(e, "craftsmanship")}
        >
          장인피자
        </button>
        <button className="tablinks" onClick={(e) => openTab(e, "expert")}>
          달인피자
        </button>
        <button className="tablinks" onClick={(e) => openTab(e, "luxury")}>
          전문가
        </button>
      </div>

      <div id="all" className="tabcontent">
        <div id="allMenuItems"></div>
        <div id="allPagination"></div>
      </div>

      <div id="craftsmanship" className="tabcontent">
        <div id="craftsmanshipMenuItems"></div>
        <div id="craftsmanshipPagination"></div>
      </div>

      <div id="expert" className="tabcontent">
        <div id="expertMenuItems"></div>
        <div id="expertPagination"></div>
      </div>

      <div id="luxury" className="tabcontent">
        <div id="luxuryMenuItems"></div>
        <div id="luxuryPagination"></div>
      </div>
    </div>
  );
}
export default PizzaComponent;
