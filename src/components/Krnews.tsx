import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchKrNews } from "../api";
import { Link } from "react-router-dom";

interface Inews {
  status: string;
  totalResults: number;
  articles: [
    {
      source: {
        id: string;
        name: string;
      };
      author: string;
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    }
  ];
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Category = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  padding-top: 48px;
  margin-bottom: 12px;
  border-top: 1px solid ${(props) => props.theme.shadowColor};
`;

const ContentsWrapper = styled.div`
  width: 80%;
  min-width: 1080px;
  /* background-color: ${(props) => props.theme.bgColor}; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px 8px;
  place-items: center;
  @media (min-width: 1750px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 2200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.4s linear transform;
  &:hover {
    transition: 0.4s linear transform;
    transform: scale(1.1);
  }
`;

const ImgWrapper = styled.div`
  width: 320px;
  height: 180px;
  margin-bottom: 2px;
  border-radius: 15px;
  background-color: white;
  display: flex;
`;

const NewsImg = styled.img`
  width: 100%;
  height: 180px;
  margin-bottom: 2px;
  border-radius: 15px;
`;

const NoImg = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 15px;
  font-size: 16px;
  font-weight: 600;
`;

const DetailWrapper = styled.div`
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  box-shadow: 4px 3px 3px ${(props) => props.theme.shadowColor};
`;

const Title = styled.p`
  width: 300px;
  height: 40px;
  margin-top: 12px;
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  :hover {
    text-decoration: underline black solid;
  }
`;

const Dis = styled.div`
  width: 300px;
  height: 80px;
  /* white-space: pre; */
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 24px;
`;

function Krnews() {
  const { isLoading, data } = useQuery<Inews>("krnews", fetchKrNews);

  return (
    <>
      {isLoading ? (
        <div>... is loading</div>
      ) : (
        <>
          <Category>Korean Top News</Category>
          <Wrapper>
            <ContentsWrapper>
              {data?.articles.map((item, index) => (
                <Card key={index}>
                  {item.urlToImage === null ? (
                    <NoImg>No Image</NoImg>
                  ) : (
                    <Link to={item.url} target="_brank">
                      <ImgWrapper>
                        <NewsImg src={item.urlToImage} alt="article img" />
                      </ImgWrapper>
                    </Link>
                  )}

                  <DetailWrapper>
                    <Link to={item.url} target="_brank">
                      <Title>{item.title}</Title>
                    </Link>
                    <Dis>{item.description}</Dis>
                  </DetailWrapper>
                </Card>
              ))}
            </ContentsWrapper>
          </Wrapper>
        </>
      )}
    </>
  );
}

export default Krnews;
