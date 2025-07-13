// 할인 이전 가격 계산
export function calculateOriginalPrice(
  currentPrice: number,
  discountPercentage: number
): number {
  if (discountPercentage < 0 || discountPercentage >= 100) {
    throw new Error("할인율은 0% 이상 100% 미만이어야 합니다.");
  }

  const discountRate = discountPercentage / 100;
  return currentPrice / (1 - discountRate);
}

// 할인된 금액 계산
export function calculateDiscountAmount(
  originalPrice: number,
  discountPercentage: number
): number {
  if (discountPercentage < 0 || discountPercentage >= 100) {
    throw new Error("할인율은 0% 이상 100% 미만이어야 합니다.");
  }

  return originalPrice * (discountPercentage / 100);
}

// 할인된 가격 계산
export function calculateDiscountedPrice(
  originalPrice: number,
  discountPercentage: number
): number {
  if (discountPercentage < 0 || discountPercentage >= 100) {
    throw new Error("할인율은 0% 이상 100% 미만이어야 합니다.");
  }

  const discountAmount = calculateDiscountAmount(
    originalPrice,
    discountPercentage
  );
  return originalPrice - discountAmount;
}

// 가격 정보 계산
export function calculatePriceInfo(
  currentPrice: number,
  discountPercentage: number
) {
  const originalPrice = calculateOriginalPrice(
    currentPrice,
    discountPercentage
  );
  const discountAmount = calculateDiscountAmount(
    originalPrice,
    discountPercentage
  );

  return {
    originalPrice: Math.round(originalPrice * 100) / 100, // 소수점 2자리까지
    currentPrice: currentPrice,
    discountPercentage: discountPercentage,
    discountAmount: Math.round(discountAmount * 100) / 100,
    savings: Math.round(discountAmount * 100) / 100,
  };
}
