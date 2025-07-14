export const shareLink = async () => {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다.");
    } else {
      // 폴백: 텍스트 선택 방법
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("링크가 복사되었습니다.");
    }
  } catch (error) {
    console.error("클립보드 복사 실패:", error);
    alert("링크 복사에 실패했습니다.");
  }
};
