import React, { Component } from 'react'

export default class Paginator extends Component {


    render() {
        const { page, total_pages, changePage } = this.props;
        return (
            <div>
                <button disabled={page === 1}
                    onClick={(e) => {
                        e.preventDefault();
                        changePage(page - 1);
                    }}
                >&lt;--</button> {page + '/' + total_pages} <button disabled={page === total_pages}
                    onClick={(e) => {
                        e.preventDefault();
                        changePage(page + 1);
                    }}>--&gt;</button>
            </div>
        )
    }
}
