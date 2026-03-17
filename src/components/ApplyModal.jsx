import ApplySuccessModal from './ApplySuccessModal'
import ApplyFormModal from './ApplyFormModal'

const ApplyModal = ({ letter, loading, error, success, onLetterChange, onSubmit, onClose }) => {
    if (success) return <ApplySuccessModal onClose={onClose} />
    return <ApplyFormModal letter={letter} loading={loading} error={error} onLetterChange={onLetterChange} onSubmit={onSubmit} onClose={onClose} />
}

export default ApplyModal