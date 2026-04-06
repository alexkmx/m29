import styled from "styled-components";

const HeaderS = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #181818;
  color: white;
  img {
    width: 200px;
  }
`;

const SearchBarS = styled.div`
   padding: 20px;

  input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 250px;
  }

  button {
    padding: 10px; 
    margin-left: 5px; 
    cursor: pointer;
  }
`;

const SearchDiscografia = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 30px;
  color: white;

  .link {
    text-decoration: none; 
    color: inherit;
  }
`;

const SearchAlbum = styled.section`
  background-color: #181818;
   padding: 10px;
   border-radius: 8px; 
   text-align: center; 

   img {
     width: 100%;
     border-radius: 4px; 
   }

   h4{
     margin: 10px 0 5px;
   }
`;

const SongDetailCont = styled.section`
  padding: 40px;
  max-width: 1000px;
  margin: 0 auto;

  .link {
    color: #1DB954;
    text-decoration: none;
  }
`;

const SongCont = styled.section`
  padding: 20px;

  input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 250px;
  }

  button {
    padding: 10px; 
    margin-left: 5px; 
    cursor: pointer;
  }

  img {
    width: 250px;
    border-radius: 10px;
    boxShadow: 0 4px 20px rgba(0,0,0,0.5); 
  }

  h3 {
    color: #b3b3b3;
  }

  p {
    font-size: 0.9rem;
    color: #888;
  }
`;

const TablaDetalles = styled.section`
  margin-top: 40px;

  h2 {
    border-bottom: 1px solid #333;
    padding-bottom: 10px; 
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px; 
  }
`;

export {
    HeaderS,
    SearchBarS,
    SearchDiscografia,
    SearchAlbum,
    SongDetailCont,
    SongCont,
    TablaDetalles,
}