'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Brain,
  Zap,
  BookOpen,
  BarChart3,
  Calculator,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  GitBranch,
  Shapes,
} from 'lucide-react';

/* ========================================================================= */
/* NAVIGATION DATA DEFINITIONS (Easily Scalable for Future Additions)        */
/* ========================================================================= */

export interface NavItem {
  title: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export interface NavDropdown {
  id: 'iq-tests' | 'tools';
  label: string;
  items: NavItem[];
}

const IQ_TESTS_ITEMS: NavItem[] = [
  {
    title: 'Full IQ Test',
    href: '/',
    description: 'Comprehensive 20-question assessment across numbers, logic, patterns, and spatial reasoning.',
    icon: Brain,
    badge: '20 Qs',
  },
  {
    title: 'Logical Reasoning Test',
    href: '/logical-reasoning-test/',
    description: '20-question test covering deductive syllogisms, conditional logic, ordering, and sequences.',
    icon: GitBranch,
    badge: '20 Qs',
  },
  {
    title: 'Abstract Reasoning Test',
    href: '/abstract-reasoning-test/',
    description: '20 visual puzzles testing geometric patterns, matrix rules, analogies, and sequences.',
    icon: Shapes,
    badge: 'Visual',
  },
  {
    title: 'Quick IQ Test',
    href: '/quick-iq-test/',
    description: '10-question rapid reasoning challenge with instant scoring in about 5 minutes.',
    icon: Zap,
    badge: '5 Min',
  },
];

const TOOLS_ITEMS: NavItem[] = [
  {
    title: 'IQ Score Chart',
    href: '/iq-score-chart/',
    description: 'Explore normal distribution bell curves, classification ranges, and population percentages.',
    icon: BarChart3,
    badge: 'Interactive',
  },
  {
    title: 'IQ Percentile Calculator',
    href: '/iq-percentile-calculator/',
    description: 'Convert between standardized IQ scores and theoretical normal distribution percentiles.',
    icon: Calculator,
    badge: 'Two-Way',
  },
  {
    title: 'Average IQ by Age',
    href: '/average-iq-by-age/',
    description: 'Reference chart and guide explaining age-normed scores and cognitive development across the lifespan.',
    icon: BookOpen,
    badge: 'Guide',
  },
];

interface HeaderProps {
  onStartClick?: () => void;
  isTestActive?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onStartClick,
  isTestActive = false,
}) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<'iq-tests' | 'tools' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [expandedMobileGroups, setExpandedMobileGroups] = useState<Record<string, boolean>>({
    'iq-tests': true,
    tools: true,
  });

  const headerRef = useRef<HTMLElement>(null);
  const iqTestsBtnRef = useRef<HTMLButtonElement>(null);
  const toolsBtnRef = useRef<HTMLButtonElement>(null);

  // Helper to determine active route
  const isRouteActive = useCallback(
    (href: string) => {
      if (href === '/') {
        return pathname === '/';
      }
      const cleanHref = href.replace(/\/$/, '');
      const cleanPath = pathname.replace(/\/$/, '');
      return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + '/');
    },
    [pathname]
  );

  const isIqTestsActive = IQ_TESTS_ITEMS.some((item) => isRouteActive(item.href));
  const isToolsActive = TOOLS_ITEMS.some((item) => isRouteActive(item.href));
  const isPracticeActive = isRouteActive('/iq-practice-questions/');

  // Handle sticky scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Click outside listener to dismiss desktop dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Escape key listener to close dropdowns or mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (openDropdown) {
          setOpenDropdown(null);
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openDropdown, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isMobileMenuOpen]);

  const toggleDropdown = (id: 'iq-tests' | 'tools') => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const toggleMobileGroup = (id: string) => {
    setExpandedMobileGroups((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E2EAF7] shadow-[0_4px_24px_-4px_rgba(7,21,47,0.06)]'
          : 'bg-white/85 backdrop-blur-sm border-b border-[#E2EAF7]'
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-2.5 sm:px-6 h-[64px] sm:h-[70px] flex items-center justify-between gap-1.5 sm:gap-4">
        {/* ================================================================= */}
        {/* 1. BRAND LOGO & WORDMARK                                          */}
        {/* ================================================================= */}
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF] rounded-xl p-0.5 sm:p-1 shrink-0"
          aria-label="IQ Test Homepage"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#1B40DF] via-[#2453FF] to-[#4779FF] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(36,83,255,0.28)] group-hover:shadow-[0_6px_16px_rgba(36,83,255,0.4)] group-hover:scale-105 transition-all duration-200 shrink-0">
            {/* Geometric IQ Symbol */}
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
              <circle cx="17.5" cy="17.5" r="3.5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-sm sm:text-xl tracking-tight leading-none text-[#07152F]">
              IQ <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2453FF] to-[#3B66FF]">Test</span>
            </span>
            <span className="hidden sm:inline text-[8.5px] sm:text-[10px] font-extrabold tracking-wider uppercase text-[#64748B] mt-0.5">
              Reasoning Assessment
            </span>
          </div>
        </Link>

        {/* ================================================================= */}
        {/* 2. DESKTOP NAVIGATION (Hidden on mobile)                          */}
        {/* Arrange: Home | IQ Tests ▼ | Practice | Tools ▼                   */}
        {/* ================================================================= */}
        {!isTestActive && (
          <nav
            className="hidden md:flex items-center gap-1.5 lg:gap-2 text-[13px] font-semibold text-[#60718B]"
            aria-label="Primary Navigation"
          >
            {/* 2.1 Home Link */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF] ${
                pathname === '/'
                  ? 'text-[#2453FF] bg-[#EEF4FF] font-bold'
                  : 'hover:text-[#07152F] hover:bg-[#F2F7FF]'
              }`}
            >
              Home
            </Link>

            {/* 2.2 IQ Tests Dropdown */}
            <div className="relative">
              <button
                ref={iqTestsBtnRef}
                type="button"
                onClick={() => toggleDropdown('iq-tests')}
                onMouseEnter={() => setOpenDropdown('iq-tests')}
                aria-expanded={openDropdown === 'iq-tests'}
                aria-haspopup="true"
                aria-controls="iq-tests-menu"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF] ${
                  openDropdown === 'iq-tests' || isIqTestsActive
                    ? 'text-[#2453FF] bg-[#EEF4FF] font-bold'
                    : 'hover:text-[#07152F] hover:bg-[#F2F7FF]'
                }`}
              >
                <span>IQ Tests</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === 'iq-tests' ? 'rotate-180 text-[#2453FF]' : 'text-[#8A9DBA]'
                  }`}
                />
              </button>

              {/* IQ Tests Dropdown Panel */}
              {openDropdown === 'iq-tests' && (
                <div
                  id="iq-tests-menu"
                  role="menu"
                  aria-label="IQ Tests Options"
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full left-0 mt-1.5 w-[340px] p-2 bg-white rounded-2xl border border-[#E2EAF7] shadow-[0_16px_36px_-6px_rgba(7,21,47,0.12),0_4px_12px_rgba(7,21,47,0.04)] animate-in fade-in zoom-in-95 duration-150 z-50"
                >
                  <div className="px-3 py-2 mb-1 border-b border-[#F0F4FA]">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8A9DBA]">
                      Select Assessment
                    </span>
                  </div>
                  <div className="space-y-1">
                    {IQ_TESTS_ITEMS.map((item) => {
                      const IconComponent = item.icon;
                      const active = isRouteActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                          className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 ${
                            active
                              ? 'bg-[#EEF4FF] border border-[#2453FF]/20'
                              : 'hover:bg-[#F8FBFF] hover:border hover:border-[#E2EAF7]'
                          }`}
                        >
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              active
                                ? 'bg-[#2453FF] text-white'
                                : 'bg-[#EEF4FF] text-[#2453FF] group-hover:bg-[#2453FF] group-hover:text-white'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span
                                className={`text-[13px] font-bold leading-tight ${
                                  active ? 'text-[#2453FF]' : 'text-[#07152F] group-hover:text-[#2453FF]'
                                }`}
                              >
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="px-1.5 py-0.5 rounded-md text-[10px] font-extrabold bg-[#E2EAF7] text-[#4779FF]">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#60718B] leading-relaxed mt-0.5 line-clamp-2 font-normal">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 2.3 Practice Link */}
            <Link
              href="/iq-practice-questions/"
              className={`px-3 py-2 rounded-xl transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF] ${
                isPracticeActive
                  ? 'text-[#2453FF] bg-[#EEF4FF] font-bold'
                  : 'hover:text-[#07152F] hover:bg-[#F2F7FF]'
              }`}
            >
              Practice
            </Link>

            {/* 2.4 Tools Dropdown */}
            <div className="relative">
              <button
                ref={toolsBtnRef}
                type="button"
                onClick={() => toggleDropdown('tools')}
                onMouseEnter={() => setOpenDropdown('tools')}
                aria-expanded={openDropdown === 'tools'}
                aria-haspopup="true"
                aria-controls="tools-menu"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF] ${
                  openDropdown === 'tools' || isToolsActive
                    ? 'text-[#2453FF] bg-[#EEF4FF] font-bold'
                    : 'hover:text-[#07152F] hover:bg-[#F2F7FF]'
                }`}
              >
                <span>Tools</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openDropdown === 'tools' ? 'rotate-180 text-[#2453FF]' : 'text-[#8A9DBA]'
                  }`}
                />
              </button>

              {/* Tools Dropdown Panel */}
              {openDropdown === 'tools' && (
                <div
                  id="tools-menu"
                  role="menu"
                  aria-label="IQ Tools Options"
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full left-0 mt-1.5 w-[350px] p-2 bg-white rounded-2xl border border-[#E2EAF7] shadow-[0_16px_36px_-6px_rgba(7,21,47,0.12),0_4px_12px_rgba(7,21,47,0.04)] animate-in fade-in zoom-in-95 duration-150 z-50"
                >
                  <div className="px-3 py-2 mb-1 border-b border-[#F0F4FA]">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8A9DBA]">
                      Statistical &amp; Psychometric Tools
                    </span>
                  </div>
                  <div className="space-y-1">
                    {TOOLS_ITEMS.map((item) => {
                      const IconComponent = item.icon;
                      const active = isRouteActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                          className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 ${
                            active
                              ? 'bg-[#EEF4FF] border border-[#2453FF]/20'
                              : 'hover:bg-[#F8FBFF] hover:border hover:border-[#E2EAF7]'
                          }`}
                        >
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                              active
                                ? 'bg-[#2453FF] text-white'
                                : 'bg-[#EEF4FF] text-[#2453FF] group-hover:bg-[#2453FF] group-hover:text-white'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span
                                className={`text-[13px] font-bold leading-tight ${
                                  active ? 'text-[#2453FF]' : 'text-[#07152F] group-hover:text-[#2453FF]'
                                }`}
                              >
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="px-1.5 py-0.5 rounded-md text-[10px] font-extrabold bg-[#E2EAF7] text-[#4779FF]">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#60718B] leading-relaxed mt-0.5 line-clamp-2 font-normal">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>
        )}

        {/* ================================================================= */}
        {/* 3. RIGHT CTA & MOBILE HAMBURGER BUTTON                            */}
        {/* ================================================================= */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {!isTestActive ? (
            <Link
              href="/test"
              onClick={onStartClick}
              className="cta-glow inline-flex items-center gap-1 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2453FF] shrink-0"
              aria-label="Start Free Online IQ Test"
            >
              <span>Start IQ Test</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.8]" />
            </Link>
          ) : (
            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#EAF2FF] text-[#2453FF] border border-[#2453FF]/20">
              <span className="w-2 h-2 rounded-full bg-[#2453FF] animate-pulse" />
              <span>Assessment In Progress</span>
            </div>
          )}

          {/* Mobile Menu Toggle Button */}
          {!isTestActive && (
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-[#E2EAF7] bg-white hover:bg-[#F2F7FF] text-[#07152F] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2453FF] cursor-pointer shrink-0"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#2453FF]" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* =================================================================== */}
      {/* 4. MOBILE NAVIGATION DRAWER / SHEET                                */}
      {/* =================================================================== */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 animate-in fade-in duration-200">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-[#07152F]/40 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-250 border-l border-[#E2EAF7]">
            {/* Drawer Header */}
            <div className="px-4 sm:px-5 h-[64px] border-b border-[#E2EAF7] flex items-center justify-between shrink-0 bg-white">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <div className="w-8 h-8 rounded-xl bg-[#2453FF] flex items-center justify-center text-white shadow-xs">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <circle cx="17.5" cy="17.5" r="3.5" />
                  </svg>
                </div>
                <span className="font-extrabold text-base tracking-tight text-[#07152F]">
                  IQ <span className="text-[#2453FF]">Test</span>
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-xl border border-[#E2EAF7] flex items-center justify-center text-[#60718B] hover:text-[#07152F] hover:bg-[#F2F7FF] transition-colors focus:outline-none cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-5">
              {/* Home Direct Link */}
              <div>
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-all ${
                    pathname === '/'
                      ? 'bg-[#EEF4FF] text-[#2453FF] border border-[#2453FF]/20'
                      : 'text-[#07152F] hover:bg-[#F8FBFF] border border-transparent'
                  }`}
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-[#8A9DBA]" />
                </Link>
              </div>

              {/* IQ Tests Accordion */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => toggleMobileGroup('iq-tests')}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#8A9DBA] py-1 cursor-pointer"
                >
                  <span>IQ Tests</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedMobileGroups['iq-tests'] ? 'rotate-180 text-[#2453FF]' : 'text-[#8A9DBA]'
                    }`}
                  />
                </button>

                {expandedMobileGroups['iq-tests'] && (
                  <div className="space-y-1.5 pl-1">
                    {IQ_TESTS_ITEMS.map((item) => {
                      const IconComponent = item.icon;
                      const active = isRouteActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                            active
                              ? 'bg-[#EEF4FF] border border-[#2453FF]/20 text-[#2453FF]'
                              : 'hover:bg-[#F8FBFF] text-[#07152F]'
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              active ? 'bg-[#2453FF] text-white' : 'bg-[#EEF4FF] text-[#2453FF]'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold">{item.title}</span>
                              {item.badge && (
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-[#E2EAF7] text-[#4779FF]">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#60718B] mt-0.5 line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Practice Section */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8A9DBA] py-1">
                  Practice
                </div>
                <div className="pl-1">
                  <Link
                    href="/iq-practice-questions/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                      isPracticeActive
                        ? 'bg-[#EEF4FF] border border-[#2453FF]/20 text-[#2453FF]'
                        : 'hover:bg-[#F8FBFF] text-[#07152F]'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isPracticeActive ? 'bg-[#2453FF] text-white' : 'bg-[#EEF4FF] text-[#2453FF]'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold">IQ Practice Questions</span>
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-[#E2EAF7] text-[#4779FF]">
                          48 Puzzles
                        </span>
                      </div>
                      <p className="text-[11px] text-[#60718B] mt-0.5 line-clamp-1">
                        Practise puzzles with worked solutions and hints.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Tools Accordion */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => toggleMobileGroup('tools')}
                  className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#8A9DBA] py-1 cursor-pointer"
                >
                  <span>Tools &amp; Calculators</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      expandedMobileGroups['tools'] ? 'rotate-180 text-[#2453FF]' : 'text-[#8A9DBA]'
                    }`}
                  />
                </button>

                {expandedMobileGroups['tools'] && (
                  <div className="space-y-1.5 pl-1">
                    {TOOLS_ITEMS.map((item) => {
                      const IconComponent = item.icon;
                      const active = isRouteActive(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all ${
                            active
                              ? 'bg-[#EEF4FF] border border-[#2453FF]/20 text-[#2453FF]'
                              : 'hover:bg-[#F8FBFF] text-[#07152F]'
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              active ? 'bg-[#2453FF] text-white' : 'bg-[#EEF4FF] text-[#2453FF]'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold">{item.title}</span>
                              {item.badge && (
                                <span className="px-1.5 py-0.2 rounded text-[9px] font-extrabold bg-[#E2EAF7] text-[#4779FF]">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#60718B] mt-0.5 line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="p-5 border-t border-[#E2EAF7] bg-[#F8FBFF]">
              <Link
                href="/test"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onStartClick?.();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-extrabold text-white bg-gradient-to-r from-[#2453FF] to-[#3B66FF] hover:from-[#1B40DF] hover:to-[#2B54E6] shadow-md transition-all active:scale-[0.98]"
              >
                <span>Start Free IQ Test</span>
                <ArrowRight className="w-4 h-4 stroke-[2.8]" />
              </Link>
              <div className="flex items-center justify-center gap-2 mt-3 text-[11px] font-semibold text-[#60718B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Instant Results • No Signup</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
