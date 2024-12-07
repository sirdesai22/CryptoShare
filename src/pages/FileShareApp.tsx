// import { useState } from 'react';
// import { LIT_NETWORKS } from "@lit-protocol/constants";
// // import { Web3Storage } from 'web3.storage';
// import * as LitJsSdk from "@lit-protocol/lit-node-client";
// import { Web3Storage } from 'node_modules/web3.storage/dist/src/lib';

// const litClient = new LitJsSdk.LitNodeClient({
//   litNetwork: LIT_NETWORKS.cayenne,
// });

// await litClient.connect();

// // Note: Replace with your actual Web3.Storage API token
// const WEB3_STORAGE_TOKEN = 'YOUR_WEB3_STORAGE_API_TOKEN';

// const FileShareApp = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const [encryptedFile, setEncryptedFile] = useState<any>(null);
//   const [accessConditions, setAccessConditions] = useState('');
//   const [shareLink, setShareLink] = useState('');

//   // Initialize Lit Protocol
//   const initLit = async () => {
//     await litClient.connect();
//   };

//   // Handle file selection
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files?.[0]) {
//       setFile(e.target.files[0]);
//     }
//   };

//   // Create Web3 Storage client
//   const getWeb3StorageClient = () => {
//     return new Web3Storage({ token: WEB3_STORAGE_TOKEN });
//   };

//   // Encrypt file using Lit Protocol
//   const encryptFile = async () => {
//     if (!file) {
//       alert('Please select a file first');
//       return;
//     }

//     try {
//       // Define access control conditions
//       const accessControlConditions = [
//         {
//           contractAddress: '',
//           standardContractType: '',
//           chain: 'ethereum',
//           method: '',
//           parameters: [':userAddress'],
//           returnValueTest: {
//             comparator: '=',
//             value: accessConditions || '*'
//           }
//         }
//       ];

//       // Encrypt the file
//       const { encryptedString: ciphertext, symmetricKey: encKey } = await LitJsSdk.encryptFile(
//         {
//           file,
//           accessControlConditions,
//           chain: 'ethereum'
//         },
//         litClient
//       );

//       // Store encrypted file in Web3 Storage
//       const client = getWeb3StorageClient();
//       const cid = await client.put([new File([ciphertext], file.name)]);

//       // Generate share link with CID and encryption metadata
//       const shareData = {
//         cid,
//         accessControlConditions,
//         symmetricKey: encKey.toString('hex')
//       };

//       setEncryptedFile(ciphertext);
//       setShareLink(JSON.stringify(shareData));
//     } catch (error) {
//       console.error('Encryption failed:', error);
//       alert('File encryption failed');
//     }
//   };

//   // Decrypt file
//   const decryptFile = async (shareData:any) => {
//     try {
//       const parsedShareData = JSON.parse(shareData);
      
//       // Fetch encrypted file from Web3 Storage
//       const client = getWeb3StorageClient();
//       const retrievedFiles = await client.get(parsedShareData.cid);
//       const files = await retrievedFiles?.files();
//       const retrievedFile = files?.[0];

//       // Decrypt file
//       const decryptedFile = await LitNodeClient.decryptFile({
//         file: retrievedFile,
//         accessControlConditions: parsedShareData.accessControlConditions,
//         symmetricKey: Buffer.from(parsedShareData.symmetricKey, 'hex')
//       });

//       // Create downloadable link
//       const downloadLink = URL.createObjectURL(new Blob([decryptedFile]));
//       window.open(downloadLink, '_blank');
//     } catch (error) {
//       console.error('Decryption failed:', error);
//       alert('File decryption failed');
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Encrypted File Sharing</h1>
      
//       {/* File Upload Section */}
//       <div className="mb-4">
//         <input 
//           type="file" 
//           onChange={handleFileChange} 
//           className="border p-2 w-full"
//         />
//         <input 
//           type="text"
//           placeholder="Access Conditions (optional)"
//           value={accessConditions}
//           onChange={(e) => setAccessConditions(e.target.value)}
//           className="border p-2 w-full mt-2"
//         />
//         <button 
//           onClick={encryptFile} 
//           className="bg-blue-500 text-white p-2 mt-2"
//         >
//           Encrypt and Share File
//         </button>
//       </div>

//       {/* Share Link Section */}
//       {shareLink && (
//         <div className="mt-4">
//           <h2 className="font-bold">Share Link:</h2>
//           <textarea 
//             value={shareLink} 
//             readOnly 
//             className="w-full border p-2"
//           />
//           <button 
//             onClick={() => navigator.clipboard.writeText(shareLink)}
//             className="bg-green-500 text-white p-2 mt-2"
//           >
//             Copy Share Link
//           </button>
//         </div>
//       )}

//       {/* Decrypt File Section */}
//       <div className="mt-4">
//         <h2 className="font-bold">Decrypt a File</h2>
//         <textarea 
//           placeholder="Paste share link here"
//           className="w-full border p-2"
//           id="decryptShareLink"
//         />
//         <button 
//           onClick={() => {
//             const shareLink = document.getElementById('decryptShareLink') as HTMLTextAreaElement;
//             decryptFile(shareLink.value);
//           }}
//           className="bg-purple-500 text-white p-2 mt-2"
//         >
//           Decrypt File
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FileShareApp;