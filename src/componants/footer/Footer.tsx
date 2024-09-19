import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="40"
        viewBox="0 0 104 40"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5068 40C13.1355 40 14.6575 39.6651 16.0731 38.9954C17.4886 38.3257 18.7139 37.3896 19.7489 36.1872V39.2694H26.758V0H19.7489V18.7443C18.8204 17.618 17.656 16.739 16.2557 16.1073C14.8554 15.4756 13.3333 15.1598 11.6895 15.1598C9.42161 15.1598 7.40868 15.704 5.65068 16.7922C3.89269 17.8805 2.51142 19.3569 1.50685 21.2215C0.502283 23.086 0 25.2055 0 27.5799C0 30 0.517504 32.1461 1.55251 34.0183C2.58752 35.8904 3.97641 37.3554 5.71918 38.4132C7.46195 39.4711 9.39117 40 11.5068 40ZM13.6073 34.0411C12.4049 34.0411 11.3318 33.7633 10.3881 33.2078C9.44444 32.6522 8.70624 31.8912 8.17352 30.9247C7.64079 29.9581 7.37443 28.8584 7.37443 27.6256C7.37443 26.3775 7.6484 25.2626 8.19635 24.2808C8.74429 23.2991 9.4863 22.5266 10.4224 21.9635C11.3584 21.4003 12.4277 21.1187 13.6301 21.1187C14.8478 21.1187 15.9285 21.4003 16.8721 21.9635C17.8158 22.5266 18.5578 23.2953 19.0982 24.2694C19.6385 25.2435 19.9087 26.3546 19.9087 27.6027C19.9087 28.8356 19.6385 29.9391 19.0982 30.9132C18.5578 31.8874 17.8158 32.6522 16.8721 33.2078C15.9285 33.7633 14.8402 34.0411 13.6073 34.0411ZM40 10.468C39.376 10.8409 38.6834 11.0274 37.9224 11.0274C37.1613 11.0274 36.465 10.8409 35.8333 10.468C35.2017 10.0951 34.6956 9.58904 34.3151 8.94977C33.9346 8.3105 33.7443 7.61035 33.7443 6.84931C33.7443 6.08828 33.9346 5.39574 34.3151 4.77169C34.6956 4.14764 35.2017 3.64916 35.8333 3.27626C36.465 2.90335 37.1613 2.71689 37.9224 2.71689C38.6834 2.71689 39.376 2.90335 40 3.27626C40.6241 3.64916 41.1225 4.14764 41.4954 4.77169C41.8683 5.39574 42.0548 6.08828 42.0548 6.84931C42.0548 7.61035 41.8683 8.3105 41.4954 8.94977C41.1225 9.58904 40.6241 10.0951 40 10.468ZM41.4155 39.2694V15.8904H34.4064V39.2694H41.4155ZM56.1187 25.4338V39.2694H49.1096V15.8904H56.1187V18.4932C57.0167 17.4886 58.1393 16.6819 59.4863 16.0731C60.8333 15.4642 62.3212 15.1598 63.9498 15.1598C65.7458 15.1598 67.325 15.5518 68.6872 16.3356C70.0495 17.1195 71.1187 18.2078 71.895 19.6005C72.6712 20.9932 73.0594 22.618 73.0594 24.4749V39.2694H66.0502V25.9589C66.0502 24.2846 65.6126 22.9795 64.7374 22.0434C63.8623 21.1073 62.6636 20.6393 61.1416 20.6393C60.1065 20.6393 59.2123 20.8486 58.4589 21.2671C57.7055 21.6857 57.1271 22.2565 56.7237 22.9795C56.3204 23.7024 56.1187 24.5205 56.1187 25.4338ZM91.5069 40C93.9726 40 96.2101 39.4673 98.2192 38.4018C100.228 37.3364 101.781 35.86 102.877 33.9726L97.8311 31.4384C96.9635 32.4734 96.0616 33.2268 95.1256 33.6986C94.1895 34.1705 93.1126 34.4064 91.895 34.4064C90.6012 34.4064 89.4673 34.1591 88.4932 33.6644C87.519 33.1697 86.7618 32.481 86.2215 31.5982C85.6811 30.7154 85.411 29.6804 85.411 28.4932H103.333C103.379 28.0974 103.406 27.8272 103.413 27.6826C103.421 27.5381 103.425 27.3668 103.425 27.1689C103.425 24.7793 102.911 22.6865 101.884 20.8904C100.856 19.0944 99.4254 17.6903 97.5913 16.6781C95.7572 15.6659 93.6225 15.1598 91.1872 15.1598C89.3607 15.1598 87.6636 15.4756 86.0959 16.1073C84.5282 16.739 83.1507 17.6218 81.9635 18.7557C80.7763 19.8897 79.8516 21.21 79.1895 22.7169C78.5274 24.2237 78.1964 25.8447 78.1964 27.5799C78.1964 29.9391 78.7823 32.0548 79.9543 33.9269C81.1263 35.7991 82.7131 37.2793 84.7146 38.3676C86.7161 39.4559 88.9802 40 91.5069 40ZM85.6621 24.6119H96.5297C96.3775 23.7139 96.054 22.9376 95.5594 22.2831C95.0647 21.6286 94.4368 21.1263 93.6758 20.7763C92.9148 20.4262 92.0548 20.2511 91.0959 20.2511C90.0761 20.2511 89.1781 20.4262 88.4018 20.7763C87.6256 21.1263 87.0015 21.6286 86.5297 22.2831C86.0578 22.9376 85.7686 23.7139 85.6621 24.6119Z"
          fill="white"
        />
      </svg>
      <div className="main-container">
        <p>
          <span>Marthwaite, Sedbergh</span> <span>Cumbria</span>
          <span>+00 44 123 4567</span>
        </p>
        <p>
          <span>OPEN TIMES</span> <span>MON - FRI: 09:00 AM - 10:00 PM</span>{' '}
          <span>SAT - SUN: 09:00 AM - 11:30 PM</span>
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--color-cod-gray);
  color: var(--color-white);
  height: 25rem;
  .main-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  p {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
  }
`

export default Footer
