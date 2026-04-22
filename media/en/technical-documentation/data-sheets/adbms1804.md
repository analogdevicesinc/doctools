<!-- lastmod 2025-06-02 -->
<!-- image -->

## FEATURES

- Cell voltage measurement
- 4 cell voltage channels
- 16-bit sigma-delta ADC with programmable filter
- 2 mV maximum total measurement error over lifetime
- Current measurement
- Synchronous current and voltage measurement
- 24-bit sigma-delta ADC with programmable filter and PGA
- 0.5 µV maximum offset error
- Integrated current accumulator (coulomb counter) both in sleep mode and normal operation mode
- Auxiliary measurements
- 9 analog inputs for external NTC thermistor connection
- 5 stack voltage measurement with integrated voltage dividers
- 1 battery system current measurement with external shunt resistor (shared with analog input)
- Integrated comparators for fast (&lt;20 µs) over and wake-up current monitoring
- Dedicated fault/alert monitor output for fast response
- Passive cell balancing up to 300 mA (max) with programmable pulse -width modulation in sleep and normal operation mode
- Charger detection
- Low-power monitoring
- Periodic voltage, current, and temperature monitoring
- 6 configurable, alerts triggered gate control outputs
- Standard 4-wire 4 MHz SPI subordinate interface
- Designed for use in ISO26262 applications with ASIL C in normal operation mode and ASIL B in sleep mode
- 4 V to 28 V power supply range
- Power consumption (typical and averaged, 13.2 V supply voltage)
- Normal operation mode (ASIL C): 7 mA
- Sleep mode (ASIL B) 34 µA
- Deep sleep mode (QM): 22 µA
- Package and temperance
- TA  = -40°C to +125°C
- 48-Lead LFCSP\_SS package with exposed pad
- Hot plug tolerant
- AEC-Q100 qualified for automotive applications

## Multicell Battery Monitor With Current Sense

## APPLICATIONS

► 12 V vehicle starter and back-up battery

## TYPICAL APPLICATION CIRCUIT

Figure 1. Typical Application Circuit

<!-- image -->

## GENERAL DESCRIPTION

The ADBMS1804 is a multicell battery stack monitor that measures up to four series connected battery cells with a total measurement error of less than 2 mV. The cell measurement range of 0 V to 5 V makes the ADBMS1804 suitable for most battery chemistries. The ADBMS1804 includes one battery stack current measurement channel, which can support synchronous current and voltage measurement. A programmable gain amplifier (PGA) features adjustment of the various current levels based on the target current range in the application.

The ADBMS1804 can be powered directly from the battery stack. The ADBMS1804 includes passive balancing for each cell, with individual pulse-width modulation (PWM) duty cycle control for each cell. The ADBMS1804 has dedicated alert output pins to indicate fault state, which makes the system more robust and quick to response. The ADBMS1804 also includes six configurable, alerts triggered gate control outputs.

Other features of the ADBMS1804 include on-chip 3.3 V and 5 V regulator, nine general-purpose analog inputs for external negative temperature coefficient (NTC) thermistor connection with a voltage bias to support the ratio measurement, five stack voltage measurement channels of up to 40 V with integrated voltage dividers, and an option to measure battery system current consumption via additional shunt resistor.

For more information about the ADBMS1804, contact CBMS\_Doc\_Req@analog.com.

## NOTES

<!-- image -->