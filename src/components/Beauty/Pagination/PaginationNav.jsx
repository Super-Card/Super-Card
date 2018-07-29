import React from 'react';
import Pagination from 'react-paginating';

const results = [
  ['logoPartner', 'discount', 'brandName', 'brandImage'],
  ['logoPartner', 'discount', 'brandName', 'brandImage'],
  ['logoPartner', 'discount', 'brandName', 'brandImage'],
  ['logoPartner', 'discount', 'brandName', 'brandImage'],
  ['logoPartner', 'discount', 'brandName', 'brandImage'],
  ['logoPartner', 'discount', 'brandName', 'brandImage'],
  ['logoPartner', 'discount', 'brandName', 'brandImage'],
  ['logoPartner', 'discount', 'brandName', 'brandImage'],
  ['logoPartner', 'discount', 'brandName', 'brandImage'],
  ['logoPartner', 'discount', 'brandName', 'brandImage']
];

const limit = 2;
const pageCount = 3;
const total = results.length * limit;

class PaginationNav extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1
    };
  }

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div>
        <div>{results[currentPage - 1].map(item => <li key={item}>{item}</li>)}</div>
        <Pagination total={total} limit={limit} pageCount={pageCount} currentPage={currentPage}>
          {({ pages, hasNextPage, hasPreviousPage, previousPage, nextPage, totalPages, getPageItemProps }) => (
            <div>
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {'<'}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;

                if (currentPage === page) {
                  activePage = { backgroundColor: '#fdce09' };
                }

                return (
                  <button
                    key={page}
                    style={activePage}
                    {...getPageItemProps({
                      pageValue: page,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {'>'}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </button>
            </div>
          )}
        </Pagination>
      </div>
    );
  }
}

export default PaginationNav;
