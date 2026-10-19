/**
 * Task veri sözleşmesi (JavaScript / JSDoc):
 * @typedef {Object} Task
 * @property {string} id - Benzersiz görev kimliği
 * @property {string} title - Görev başlığı
 * @property {string} course - Ders veya kategori
 * @property {string} date - YYYY-MM-DD formatında son tarih
 * @property {'Düşük'|'Orta'|'Yüksek'} priority - Öncelik
 * @property {boolean} completed - Tamamlanma durumu
 */
export const STORAGE_KEY = 'studyflow.tasks.v1';
