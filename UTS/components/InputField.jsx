export default function InputField({ label, name, placeholder, type = 'text', value, onChange }) {
    return (
      <div className="input-field">
        <label>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  