<!-- lastmod 2025-12-18 -->
<!-- image -->

## FEATURES

- Measures up to 6 battery cells in series
- Maximum lifetime total measurement error: 1.5 mV
- Stackable architecture supports hundreds of cells
- Built-in isoSPI interface
- 2 Mbps isolated serial communications
- Uses a single twisted pair, up to 20 meters
- Low EMI susceptibility and emissions
- Bidirectional for broken wire protection
- Capacitor or transformer coupled
- Hot plug tolerant without external protection
- Designed for high reliability systems
- Includes redundant cell measurements
- Diagnostic coverage of operational modes
- 304 µs to measure all cells in a system
- 16-bit ADC with programmable noise filter
- Passive cell balancing up to 300 mA per channel with programmable PWM
- 7 GPIO or analog inputs
- Temperature or other sensor inputs
- Configurable as an I 2 C or SPI controller
- Accommodates ±5 V busbar voltage
- Sleep state supply current: 5.5 μA
- 48-lead LQFP package with exposed pad
- AEC-Q100 qualified for automotive applications

## APPLICATIONS

- Electric and hybrid electric vehicles
- Backup battery systems
- Grid energy storage
- High power portable equipment

## GENERAL DESCRIPTION

The ADBMS6816 is a multicell battery stack monitor that measures up to six series connected battery cells with a lifetime total measurement error (TME) of less than 1.5 mV. The cell measurement range of 0 V to 5 V makes the ADBMS6816 suitable for most battery chemistries. All six cells can be measured in 304 µs, and lower data acquisition rates can be selected for high noise reduction.

## Data Sheet

## ADBMS6816

## Multicell Battery Monitor

## TYPICAL APPLICATION CIRCUIT

Figure 1.

<!-- image -->

Multiple devices are connected in a daisy chain with one host processor connection for all devices. This daisy chain can be operated bidirectionally, ensuring communication integrity even in the event of a fault along the communication path.

Multiple ADBMS6816 devices can be connected in series, permitting simultaneous cell monitoring of long, high voltage battery strings. Each ADBMS6816 has an isoSPI ™  interface for high speed, RF immune, long distance communications.

The ADBMS6816 can be powered directly from the battery stack or from an isolated supply. The ADBMS6816 includes passive balancing for each cell, with individual pulse-width modulation (PWM) duty cycle control for each cell. Other features include an on-board 5 V regulator, seven general-purpose input/output (GPIO) lines, and a sleep state, where current consumption is reduced to 5.5 µA.

For more information about the ADBMS6816, visit the ADBMS6816 product page.

|

## NOTES

## Legal Terms and Conditions

Information furnished by Analog Devices is believed to be accurate and reliable "as is". However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners. All Analog Devices products contained herein are subject to release and availability.