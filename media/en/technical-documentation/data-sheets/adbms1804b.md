<!-- lastmod 2025-05-22 -->
<!-- image -->

## FEATURES

- Cell voltage measurement
- 4 cell voltage channels
- 16-bit sigma-delta ADC with programmable filter
- 5 mV maximum total measurement error over lifetime
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
- Passive cell balancing up to 300 mA (max) with programmable pulse-width modulation in sleep and normal operation mode
- Charger detection
- Low-power monitoring
- Periodic voltage, current, and temperature monitoring
- 6 configurable, alerts triggered gate control outputs
- Standard 4-wire 4 MHz SPI subordinate interface
- Designed for use in ISO 26262 applications with ASIL B in normal operation mode and ASIL B in sleep mode
- 4 V to 28 V power supply range
- Power consumption (typical and averaged, 13.2 V supply voltage)
- Normal operation mode (ASIL B): 7 mA
- Sleep mode (ASIL B): 34 μA
- Deep sleep mode (QM): 22 μA
- Package and temperance
- TA  = -40°C to +125°C
- 48-lead LFCSP\_SS package with exposed pad
- Hot plug tolerant
- AEC-Q100 qualified for automotive applications

## APPLICATIONS

- 12 V vehicle starter and backup battery

Rev. SpB

DOCUMENT FEEDBACK

TECHNICAL SUPPORT

## Multicell Battery Monitor With Current Sense

## TYPICAL APPLICATION CIRCUIT

Figure 1. Typical Application Circuit

<!-- image -->

## GENERAL DESCRIPTION

The ADBMS1804B is a multicell battery stack monitor that measures up to four series connected battery cells with a total measurement error of less than 5 mV. The cell measurement range of 0 V to 5 V makes the ADBMS1804B suitable for most battery chemistries. The ADBMS1804B includes one battery stack current measurement channel, which can support synchronous current and voltage measurement. A programmable gain amplifier (PGA) features adjustment of the various current levels based on the target current range in the application.

The ADBMS1804B can be powered directly from the battery stack. The ADBMS1804B includes passive balancing for each cell, with individual pulse-width modulation (PWM) duty cycle control for each cell. The ADBMS1804B features dedicated alert output pins to indicate fault state, which makes the system robust and quick to response. The ADBMS1804B also includes six configurable, alerts triggered gate control outputs.

Other features of the ADBMS1804B include on-chip 3.3 V and 5 V regulator, nine general-purpose analog inputs for external negative temperature coefficient (NTC) thermistor connection with a voltage bias to support the ratio measurement, five stack voltage measurement channels of up to 40 V with integrated voltage dividers, and an option to measure battery system current consumption via an additional shunt resistor.

## NOTES

<!-- image -->