import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Assessment.css'

function Assessment() {
  const navigate = useNavigate()
  const [currentSection, setCurrentSection] = useState(1)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const sections = [
    {
      id: 1,
      title: "Business Profile & Industry",
      description: "Understanding your business model and market position",
      questions: [
        {
          id: "company_name",
          question: "Company Name",
          type: "text",
          required: true
        },
        {
          id: "business_type",
          question: "Primary Business Model",
          type: "select",
          required: true,
          options: [
            "Manufacturing & Production",
            "Professional Services & Consulting",
            "Technology & Software Development",
            "Healthcare & Medical Services",
            "Financial Services & Banking",
            "Retail & E-commerce",
            "Wholesale & Distribution",
            "Transportation & Logistics",
            "Construction & Real Estate",
            "Education & Training",
            "Hospitality & Tourism",
            "Agriculture & Food Processing",
            "Energy & Utilities",
            "Government & Public Sector",
            "Non-profit Organization",
            "Other"
          ]
        },
        {
          id: "company_size",
          question: "Organization Size",
          type: "select",
          required: true,
          options: [
            "Solo entrepreneur/Freelancer",
            "Startup (2-10 employees)",
            "Small Business (11-50 employees)",
            "Medium Business (51-200 employees)",
            "Large Business (201-1000 employees)",
            "Enterprise (1000+ employees)"
          ]
        },
        {
          id: "annual_revenue",
          question: "Annual Revenue Range",
          type: "select",
          required: true,
          options: [
            "Under $100K",
            "$100K - $500K",
            "$500K - $2M",
            "$2M - $10M",
            "$10M - $50M",
            "$50M - $200M",
            "Over $200M",
            "Prefer not to disclose"
          ]
        },
        {
          id: "market_competition",
          question: "How would you describe your market competition?",
          type: "select",
          required: true,
          options: [
            "Minimal competition - niche market",
            "Moderate competition - established players",
            "High competition - saturated market",
            "Emerging market - few established players",
            "Highly disruptive market - constant change"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Current Technology & Digital Infrastructure",
      description: "Assessing your existing technology foundation and capabilities",
      questions: [
        {
          id: "tech_infrastructure",
          question: "Current Technology Infrastructure (Select all that apply)",
          type: "multiple",
          required: true,
          options: [
            "Basic computers and office software",
            "Cloud-based systems (Google Workspace, Microsoft 365)",
            "Customer Relationship Management (CRM) system",
            "Enterprise Resource Planning (ERP) system",
            "E-commerce platform",
            "Custom web applications",
            "Mobile applications",
            "Data analytics tools",
            "Automated workflow systems",
            "Legacy systems requiring modernization",
            "AI or machine learning tools already in use"
          ]
        },
        {
          id: "data_management",
          question: "How do you currently manage business data?",
          type: "select",
          required: true,
          options: [
            "Primarily paper-based records",
            "Spreadsheets and basic digital files",
            "Database systems with some organization",
            "Integrated systems with good data flow",
            "Advanced data warehousing and analytics",
            "Real-time data processing and insights"
          ]
        },
        {
          id: "tech_team_capability",
          question: "Technical Team & Expertise",
          type: "select",
          required: true,
          options: [
            "No dedicated tech team - outsource everything",
            "Basic IT support only",
            "1-3 technical staff with general skills",
            "4-10 technical staff with specialized skills",
            "Large technical team (10+) with diverse expertise",
            "Advanced technical team with AI/ML experience"
          ]
        },
        {
          id: "digital_transformation_stage",
          question: "What stage of digital transformation is your business in?",
          type: "select",
          required: true,
          options: [
            "Traditional operations - minimal digital tools",
            "Basic digitization - some processes moved online",
            "Digital optimization - improving existing digital processes",
            "Digital transformation - reimagining business models",
            "Digital native - built around digital-first approach"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Business Operations & Process Analysis",
      description: "Understanding your workflows and identifying AI integration opportunities",
      questions: [
        {
          id: "core_processes",
          question: "Which core business processes consume the most time/resources? (Select all that apply)",
          type: "multiple",
          required: true,
          options: [
            "Customer service and support",
            "Sales and lead generation",
            "Marketing and advertising",
            "Inventory management",
            "Supply chain coordination",
            "Quality control and inspection",
            "Financial planning and accounting",
            "Human resources and recruitment",
            "Project management",
            "Data entry and documentation",
            "Reporting and analytics",
            "Compliance and regulatory tasks"
          ]
        },
        {
          id: "manual_tasks",
          question: "What percentage of your daily operations are manual/repetitive tasks?",
          type: "select",
          required: true,
          options: [
            "Less than 25% - highly automated",
            "25-50% - moderate automation",
            "50-75% - mostly manual with some automation",
            "75-90% - predominantly manual processes",
            "Over 90% - almost entirely manual operations"
          ]
        },
        {
          id: "decision_making",
          question: "How are critical business decisions typically made?",
          type: "select",
          required: true,
          options: [
            "Gut instinct and experience",
            "Basic reporting and historical data",
            "Spreadsheet analysis and simple metrics",
            "Business intelligence tools and dashboards",
            "Advanced analytics and predictive modeling",
            "AI-assisted decision support systems"
          ]
        },
        {
          id: "customer_interaction",
          question: "Primary customer interaction methods (Select all that apply)",
          type: "multiple",
          required: true,
          options: [
            "In-person meetings and consultations",
            "Phone calls and traditional communication",
            "Email and basic digital correspondence",
            "Website and online portals",
            "Social media and digital marketing",
            "Mobile apps and digital platforms",
            "Chat systems and instant messaging",
            "Video conferencing and virtual meetings",
            "Automated customer service tools"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "AI Readiness & Strategic Priorities",
      description: "Evaluating your preparedness and goals for AI integration",
      questions: [
        {
          id: "ai_familiarity",
          question: "What is your current level of familiarity with AI technologies?",
          type: "select",
          required: true,
          options: [
            "No experience - completely new to AI",
            "Basic awareness - heard about AI but no hands-on experience",
            "Some exploration - tried basic AI tools (ChatGPT, etc.)",
            "Moderate understanding - researched AI applications for business",
            "Good knowledge - experimented with multiple AI solutions",
            "Advanced - already implementing AI in business operations"
          ]
        },
        {
          id: "ai_investment_priority",
          question: "What are your top priorities for AI investment? (Select up to 3)",
          type: "multiple",
          required: true,
          options: [
            "Reducing operational costs",
            "Improving customer experience",
            "Increasing productivity and efficiency",
            "Gaining competitive advantage",
            "Enhancing decision-making capabilities",
            "Automating repetitive tasks",
            "Improving product/service quality",
            "Expanding market reach",
            "Risk management and compliance",
            "Innovation and new revenue streams",
            "Employee productivity and satisfaction",
            "Data insights and business intelligence"
          ]
        },
        {
          id: "budget_range",
          question: "What is your anticipated annual budget for AI integration and consulting?",
          type: "select",
          required: true,
          options: [
            "Under $5,000 - minimal investment",
            "$5,000 - $15,000 - small business budget",
            "$15,000 - $50,000 - moderate investment",
            "$50,000 - $150,000 - significant commitment",
            "$150,000 - $500,000 - substantial transformation",
            "Over $500,000 - enterprise-level investment",
            "Need guidance on appropriate budget"
          ]
        },
        {
          id: "implementation_timeline",
          question: "What is your preferred timeline for AI implementation?",
          type: "select",
          required: true,
          options: [
            "Immediate (within 1-3 months)",
            "Short-term (3-6 months)",
            "Medium-term (6-12 months)",
            "Long-term (1-2 years)",
            "Gradual rollout (2+ years)",
            "No specific timeline - exploratory phase"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Risk Assessment & Security Concerns",
      description: "Understanding your security requirements and risk tolerance",
      questions: [
        {
          id: "data_sensitivity",
          question: "What types of sensitive data does your business handle? (Select all that apply)",
          type: "multiple",
          required: true,
          options: [
            "Customer personal information (PII)",
            "Financial records and payment data",
            "Healthcare/medical information",
            "Proprietary business processes",
            "Intellectual property and trade secrets",
            "Employee personal and payroll data",
            "Legal and compliance documentation",
            "Government or classified information",
            "No particularly sensitive data",
            "Unsure about data classification"
          ]
        },
        {
          id: "regulatory_compliance",
          question: "Which regulatory requirements must your business comply with? (Select all that apply)",
          type: "multiple",
          required: true,
          options: [
            "GDPR (General Data Protection Regulation)",
            "HIPAA (Healthcare)",
            "SOX (Sarbanes-Oxley)",
            "PCI DSS (Payment Card Industry)",
            "FERPA (Educational Records)",
            "Industry-specific regulations",
            "Local/state privacy laws",
            "International trade regulations",
            "No specific regulatory requirements",
            "Unsure about compliance requirements"
          ]
        },
        {
          id: "security_concerns",
          question: "What are your primary concerns about AI implementation? (Select all that apply)",
          type: "multiple",
          required: true,
          options: [
            "Data privacy and confidentiality",
            "Cybersecurity vulnerabilities",
            "Job displacement and employee concerns",
            "Reliability and accuracy of AI decisions",
            "Cost and return on investment",
            "Integration complexity with existing systems",
            "Vendor dependence and lock-in",
            "Regulatory compliance challenges",
            "Lack of internal expertise",
            "Customer trust and acceptance",
            "Ethical considerations",
            "No major concerns"
          ]
        },
        {
          id: "training_requirements",
          question: "What level of training and support would your team need?",
          type: "select",
          required: true,
          options: [
            "Comprehensive training from basics to advanced",
            "Moderate training with ongoing support",
            "Basic orientation and documentation",
            "Minimal training - team is tech-savvy",
            "Prefer fully managed solution with no training needed",
            "Custom training based on specific roles and needs"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Future Vision & Competitive Strategy",
      description: "Planning for long-term AI adoption and market positioning",
      questions: [
        {
          id: "business_growth_goals",
          question: "What are your primary business growth objectives for the next 2-3 years?",
          type: "multiple",
          required: true,
          options: [
            "Increase revenue by 25-50%",
            "Expand into new markets or regions",
            "Launch new products or services",
            "Improve operational efficiency by 30%+",
            "Enhance customer satisfaction and retention",
            "Scale team and organizational capacity",
            "Achieve market leadership position",
            "Improve profit margins significantly",
            "Build sustainable competitive advantages",
            "Establish thought leadership in industry"
          ]
        },
        {
          id: "ai_transformation_vision",
          question: "How do you envision AI transforming your business model?",
          type: "select",
          required: true,
          options: [
            "Minor efficiency improvements - same core model",
            "Moderate enhancement - better processes and customer service",
            "Significant transformation - new capabilities and offerings",
            "Complete reimagining - AI-first business model",
            "Industry disruption - pioneering new AI-powered approaches",
            "Unsure - need guidance on possibilities"
          ]
        },
        {
          id: "competitive_positioning",
          question: "How important is it to be an AI leader in your industry?",
          type: "select",
          required: true,
          options: [
            "Critical - must be first-to-market with AI innovations",
            "Important - want to be among early adopters",
            "Moderate - prefer proven solutions over cutting-edge",
            "Conservative - will adopt when AI becomes standard",
            "Follower - will implement when competitors force adaptation",
            "Unsure - need strategic guidance"
          ]
        },
        {
          id: "success_metrics",
          question: "How would you measure the success of AI implementation? (Select top 3)",
          type: "multiple",
          required: true,
          options: [
            "Cost reduction and operational savings",
            "Revenue growth and new opportunities",
            "Customer satisfaction and retention improvements",
            "Employee productivity and job satisfaction",
            "Time savings and process efficiency",
            "Quality improvements and error reduction",
            "Competitive advantage and market share",
            "Innovation and new capability development",
            "Risk reduction and better compliance",
            "Data insights and better decision making",
            "Brand reputation and industry recognition",
            "Return on investment (ROI) metrics"
          ]
        },
        {
          id: "consultation_preferences",
          question: "What type of consulting engagement would work best for your organization?",
          type: "select",
          required: true,
          options: [
            "Comprehensive strategy development and implementation",
            "Phased approach with pilot projects first",
            "Specific problem-solving and tactical solutions",
            "Training and knowledge transfer focus",
            "Ongoing advisory and support relationship",
            "Hybrid approach combining multiple elements"
          ]
        }
      ]
    }
  ]

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const handleNext = () => {
    // Scroll to top of the page with smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    if (currentSection < sections.length) {
      setCurrentSection(currentSection + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    // Scroll to top of the page with smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
    }
  }

  const isCurrentSectionComplete = () => {
    const currentSectionData = sections[currentSection - 1]
    const requiredQuestions = currentSectionData.questions.filter(q => q.required)
    
    return requiredQuestions.every(question => {
      const answer = answers[question.id]
      if (question.type === 'multiple') {
        return answer && answer.length > 0
      }
      return answer && answer.trim() !== ''
    })
  }
  if (showResults) {
    // Calculate a more sophisticated score based on responses
    const calculateAIReadinessScore = () => {
      let score = 0;
      let maxScore = 0;
      
      // Business maturity scoring
      const revenueScore = {
        "Under $100K": 1,
        "$100K - $500K": 2,
        "$500K - $2M": 3,
        "$2M - $10M": 4,
        "$10M - $50M": 5,
        "$50M - $200M": 6,
        "Over $200M": 7
      };
      score += revenueScore[answers.annual_revenue] || 0;
      maxScore += 7;
      
      // Tech infrastructure scoring
      const techInfraCount = answers.tech_infrastructure?.length || 0;
      score += Math.min(techInfraCount, 8);
      maxScore += 8;
      
      // Digital transformation stage
      const transformationScore = {
        "Traditional operations - minimal digital tools": 1,
        "Basic digitization - some processes moved online": 2,
        "Digital optimization - improving existing digital processes": 4,
        "Digital transformation - reimagining business models": 6,
        "Digital native - built around digital-first approach": 8
      };
      score += transformationScore[answers.digital_transformation_stage] || 0;
      maxScore += 8;
      
      // AI familiarity
      const aiFamiliarityScore = {
        "No experience - completely new to AI": 1,
        "Basic awareness - heard about AI but no hands-on experience": 2,
        "Some exploration - tried basic AI tools (ChatGPT, etc.)": 4,
        "Moderate understanding - researched AI applications for business": 6,
        "Good knowledge - experimented with multiple AI solutions": 8,
        "Advanced - already implementing AI in business operations": 10
      };
      score += aiFamiliarityScore[answers.ai_familiarity] || 0;
      maxScore += 10;
      
      return Math.round((score / maxScore) * 100);
    };
    
    const readinessScore = calculateAIReadinessScore();
    
    const getScoreInterpretation = (score) => {
      if (score >= 80) return { text: "Excellent! You're ready for advanced AI implementation.", class: "score-excellent" };
      if (score >= 60) return { text: "Good foundation! Ready for strategic AI integration.", class: "score-good" };
      if (score >= 40) return { text: "Moderate readiness. Let's build your AI foundation.", class: "score-moderate" };
      return { text: "Early stage. Perfect time to start your AI journey.", class: "score-early" };
    };
    
    const interpretation = getScoreInterpretation(readinessScore);
    
    return (
      <div className="assessment-container">
        <div className="assessment-card">
          <div className="results-header">
            <h1>Your AI Integration Readiness Assessment</h1>
            <p>Comprehensive analysis of your business's AI adoption potential</p>
          </div>
          
          <div className="score-section">
            <div className="score-circle">
              <div className="score-value">{readinessScore}</div>
              <div className="score-label">AI Readiness Score</div>
            </div>
            <div className="score-interpretation">
              <p className={interpretation.class}>{interpretation.text}</p>
            </div>
          </div>
          
          <div className="recommendations-section">
            <h3>Personalized Recommendations</h3>
            <div className="recommendation-grid">
              <div className="recommendation-card">
                <h4>🎯 Priority Focus Areas</h4>
                <ul>
                  {answers.ai_investment_priority?.slice(0, 3).map((priority, index) => (
                    <li key={index}>{priority}</li>
                  ))}
                </ul>
              </div>
              <div className="recommendation-card">
                <h4>⚡ Quick Wins</h4>
                <ul>
                  <li>AI-powered customer service automation</li>
                  <li>Intelligent document processing</li>
                  <li>Predictive analytics for decision making</li>
                </ul>
              </div>
              <div className="recommendation-card">
                <h4>🛡️ Security & Compliance</h4>
                <ul>
                  <li>Data privacy protection strategies</li>
                  <li>Secure AI implementation protocols</li>
                  <li>Regulatory compliance frameworks</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="cta-section">
            <h3>Ready to Transform Your Business with AI?</h3>
            <p>Based on your assessment, I can help you develop a customized AI implementation strategy that fits your budget, timeline, and security requirements. Let's discuss how to safely integrate cutting-edge AI tools into your existing business model while training your team for long-term success.</p>
            
            <div className="value-proposition">
              <div className="value-item">
                <span className="value-icon">💡</span>
                <span>Strategic AI Planning & Implementation</span>
              </div>
              <div className="value-item">
                <span className="value-icon">🛡️</span>
                <span>Secure & Compliant AI Solutions</span>
              </div>
              <div className="value-item">
                <span className="value-icon">📈</span>
                <span>Affordable & Scalable Integration</span>
              </div>
              <div className="value-item">
                <span className="value-icon">🎓</span>
                <span>Comprehensive Team Training</span>
              </div>
            </div>
            
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => window.open('mailto:contact@simplyaisolutions.com?subject=AI Assessment Follow-up - ' + answers.company_name + '&body=Hi! I just completed the AI Integration Assessment and would like to schedule a consultation to discuss implementing AI solutions for ' + answers.company_name + '. My AI Readiness Score was ' + readinessScore + '.')}>
                Schedule Free Strategy Consultation
              </button>              <button className="btn-secondary" onClick={() => navigate('/')}>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentSectionData = sections[currentSection - 1]
  const totalQuestions = sections.reduce((acc, section) => acc + section.questions.length, 0)
  const completedQuestions = sections.slice(0, currentSection - 1).reduce((acc, section) => acc + section.questions.length, 0) + 
    currentSectionData.questions.filter(q => answers[q.id]).length

  return (
    <div className="assessment-container">
      <div className="assessment-card">
        <div className="assessment-header">
          <h1>AI Integration Assessment</h1>
          <p>Comprehensive evaluation of your AI readiness across {sections.length} key areas</p>
        </div>

        <div className="progress-section">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(completedQuestions / totalQuestions) * 100}%` }}
            ></div>
          </div>
          <div className="progress-text">
            Section {currentSection} of {sections.length}: {currentSectionData.title}
          </div>
        </div>

        <div className="section-navigation">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className={`section-tab ${currentSection === section.id ? 'active' : ''} ${
                sections.slice(0, index).every(s => 
                  s.questions.filter(q => q.required).every(q => answers[q.id])
                ) ? 'completed' : ''
              }`}
              onClick={() => {
                // Scroll to top when clicking on section tabs too
                window.scrollTo({ top: 0, behavior: 'smooth' })
                if (index < currentSection || sections.slice(0, index).every(s => 
                  s.questions.filter(q => q.required).every(q => answers[q.id])
                )) {
                  setCurrentSection(section.id)
                }
              }}
            >
              <div className="tab-number">{section.id}</div>
              <div className="tab-title">{section.title}</div>
            </div>
          ))}
        </div>
        
        <div className="section-content">
          <h2>{currentSectionData.title}</h2>
          <p className="section-description">{currentSectionData.description}</p>
          
          <div className="questions-container">
            {currentSectionData.questions.map((question) => (
              <div key={question.id} className="question-block">
                <label className="question-label">
                  {question.question}
                  {question.required && <span className="required">*</span>}
                </label>
                
                {question.type === "text" && (
                  <input
                    type="text"
                    className="text-input"
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                    placeholder="Enter your answer..."
                  />
                )}
                
                {question.type === "select" && (
                  <select
                    className="select-input"
                    value={answers[question.id] || ''}
                    onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  >
                    <option value="">Select an option...</option>
                    {question.options.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                )}
                
                {question.type === "multiple" && (
                  <div className="checkbox-group">
                    {question.options.map((option, index) => (
                      <label key={index} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={answers[question.id]?.includes(option) || false}
                          onChange={(e) => {
                            const currentAnswers = answers[question.id] || []
                            if (e.target.checked) {
                              handleAnswerChange(question.id, [...currentAnswers, option])
                            } else {
                              handleAnswerChange(question.id, currentAnswers.filter(a => a !== option))
                            }
                          }}
                        />
                        <span className="checkbox-text">{option}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="navigation-buttons">
          {currentSection > 1 && (
            <button className="btn-secondary" onClick={handlePrevious}>
              Previous Section
            </button>
          )}
          
          <button 
            className="btn-primary" 
            onClick={handleNext}
            disabled={!isCurrentSectionComplete()}
          >
            {currentSection === sections.length ? 'Get Results' : 'Next Section'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Assessment
