import { Box, Button, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { NextPage } from 'next';
import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const TopPage: NextPage = () => {
  const [data, setData] = useState('');
  const [isOpen, { toggle }] = useDisclosure(false);

  const onClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.ReactNativeWebView.postMessage('JoinInvitedFamily');
  };

  return (
    <>
      <Center style={{ flexDirection: 'column', height: '100vh' }}>
        <Button onClick={toggle}>{isOpen ? '閉じる' : 'QRコードを読み込む'}</Button>
        <Button onClick={onClick}>遷移</Button>
        {isOpen && (
          <Box mt={10} style={{ width: 300 }}>
            <QrReader
              ViewFinder={ViewFinder}
              constraints={{
                facingMode: 'user',
              }}
              onResult={(result, error) => {
                if (result) setData(result?.getText);

                if (error) console.info(error);
              }}
            />
            <p>{data}</p>
          </Box>
        )}
      </Center>
    </>
  );
};

export default TopPage;

const ViewFinder = () => (
  <>
    <svg
      style={{
        border: '50px solid rgba(0, 0, 0, 0.3)',
        boxSizing: 'border-box',
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 1,
      }}
      viewBox="0 0 100 100"
      width="50px"
    >
      <path d="M13,0 L0,0 L0,13" fill="none" stroke="rgba(255, 0, 0, 0.5)" strokeWidth="5" />
      <path d="M0,87 L0,100 L13,100" fill="none" stroke="rgba(255, 0, 0, 0.5)" strokeWidth="5" />
      <path d="M87,100 L100,100 L100,87" fill="none" stroke="rgba(255, 0, 0, 0.5)" strokeWidth="5" />
      <path d="M100,13 L100,0 87,0" fill="none" stroke="rgba(255, 0, 0, 0.5)" strokeWidth="5" />
    </svg>
  </>
);
