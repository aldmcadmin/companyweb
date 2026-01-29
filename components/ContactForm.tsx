
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Button from './Button';
import { useSite } from '../contexts/SiteContext';

interface FormData {
  company: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  message: string;
  agreement: boolean;
}

const ContactForm: React.FC = () => {
  const { config } = useSite();
  const [formData, setFormData] = useState<FormData>({
    company: '',
    name: '',
    phone: '',
    email: '',
    type: '견적문의',
    message: '',
    agreement: false
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, agreement: e.target.checked }));
    if (errors.agreement) setErrors(prev => ({ ...prev, agreement: undefined }));
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.company) newErrors.company = '회사명을 입력해주세요.';
    if (!formData.name) newErrors.name = '담당자 성함을 입력해주세요.';
    if (!formData.phone) newErrors.phone = '연락처를 입력해주세요.';
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = '유효한 이메일을 입력해주세요.';
    if (!formData.message) newErrors.message = '문의 내용을 입력해주세요.';
    if (!formData.agreement) newErrors.agreement = '개인정보 수집 및 이용에 동의해주세요.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    try {
      const response = await fetch("https://formspree.io/f/mykjkgnj", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({
            company: '',
            name: '',
            phone: '',
            email: '',
            type: '견적문의',
            message: '',
            agreement: false
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">문의가 접수되었습니다.</h3>
        <p className="text-gray-500 mb-8 leading-relaxed">
          담당자가 내용 확인 후 기재해주신 연락처로<br />빠른 시일 내에 답변 드리겠습니다.
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="rounded-full">
          추가 문의하기
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
      <div className="space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900">견적 및 상담 문의</h3>
          <p className="text-sm text-gray-500 mt-1">상세한 내용을 남겨주시면 정확한 상담이 가능합니다.</p>
        </div>

        {/* Form Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700 ml-1">회사명 <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="(주)대우경금속"
              className={`w-full p-4 bg-gray-50 border rounded-xl outline-none transition-all focus:bg-white focus:ring-2 ${errors.company ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'}`}
            />
            {errors.company && <p className="text-xs text-red-500 ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.company}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700 ml-1">담당자 성함 <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="홍길동"
              className={`w-full p-4 bg-gray-50 border rounded-xl outline-none transition-all focus:bg-white focus:ring-2 ${errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'}`}
            />
            {errors.name && <p className="text-xs text-red-500 ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700 ml-1">연락처 <span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="010-1234-5678"
              className={`w-full p-4 bg-gray-50 border rounded-xl outline-none transition-all focus:bg-white focus:ring-2 ${errors.phone ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'}`}
            />
            {errors.phone && <p className="text-xs text-red-500 ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
          </div>

          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700 ml-1">이메일 <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@company.com"
              className={`w-full p-4 bg-gray-50 border rounded-xl outline-none transition-all focus:bg-white focus:ring-2 ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'}`}
            />
            {errors.email && <p className="text-xs text-red-500 ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-bold text-gray-700 ml-1">문의 유형</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue appearance-none"
          >
            <option value="견적문의">견적 문의</option>
            <option value="기술상담">기술 상담</option>
            <option value="채용문의">채용 문의</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-bold text-gray-700 ml-1">문의 내용 <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="제품 규격, 수량, 납기일 등 상세 내용을 입력해주시면 정확한 견적이 가능합니다."
            className={`w-full p-4 bg-gray-50 border rounded-xl outline-none transition-all focus:bg-white focus:ring-2 resize-none ${errors.message ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'}`}
          />
          {errors.message && <p className="text-xs text-red-500 ml-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
        </div>

        {/* Agreement */}
        <div className="pt-2">
           <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input 
                  type="checkbox" 
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleCheckboxChange}
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 transition-all checked:border-brand-blue checked:bg-brand-blue"
                />
                <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
              </div>
              <span className={`text-sm ${errors.agreement ? 'text-red-500' : 'text-gray-500 group-hover:text-gray-700'}`}>
                [필수] 개인정보 수집 및 이용에 동의합니다.
              </span>
           </label>
        </div>

        <div className="pt-4">
          <Button 
            type="submit" 
            fullWidth 
            disabled={status === 'submitting'}
            className="rounded-xl h-14 text-lg font-bold shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20"
          >
            {status === 'submitting' ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" /> 전송 중...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                문의하기 <Send className="w-5 h-5" />
              </span>
            )}
          </Button>
          {status === 'error' && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm text-center flex items-center justify-center gap-2 animate-fade-in">
              <AlertCircle className="w-4 h-4" />
              전송에 실패했습니다. 잠시 후 다시 시도해주세요.
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
