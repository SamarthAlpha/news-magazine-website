/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ArticlePage } from './pages/Article';
import { CategoryPage } from './pages/Category';
import { EventsPage } from './pages/Events';
import { AwardsPage } from './pages/Awards';
import { MagazinePage } from './pages/Magazine';
import { SearchPage } from './pages/Search';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news/:id" element={<ArticlePage />} />
          <Route path="search" element={<SearchPage />} />
          
          {/* Specific Pages */}
          <Route path="events" element={<EventsPage />} />
          <Route path="awards" element={<AwardsPage />} />
          <Route path="magazine" element={<MagazinePage />} />

          {/* Category Routes */}
          <Route path="news" element={<CategoryPage />} />
          <Route path="news/:category" element={<CategoryPage />} />
          <Route path="technology/:category" element={<CategoryPage />} />
          <Route path="analysis/:category" element={<CategoryPage />} />
          
          {/* Fallback for other top-level pages */}
          <Route path=":category" element={<CategoryPage />} />

          <Route path="*" element={<div className="container mx-auto py-20 text-center">Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
