<!-- lastmod 2025-10-08 -->
<!-- image -->

## FEATURES

- Measures up to 12 battery cells in series
- Maximum lifetime total measurement error: ±1.9 mV at 3.3 V per cell (-40 ℃ to +85 ℃ )
- Stackable architecture for high voltage battery packs
- Built-in isoSPI interface
- 2 Mbps isolated serial communications
- Uses a single twisted pair, up to 20 meters
- Low EMI susceptibility and emissions
- Bidirectional for broken wire protection
- Capacitor or transformer coupled
- Hot plug tolerant without external protection
- Diagnostics for IC and application circuit failure modes
- 304 µs to measure all cells in a system
- 16-bit ADC with programmable noise filter
- Passive cell balancing up to 300 mA per channel with programmable PWM
- 7 GPIOx or analog inputs
- Temperature or other sensor inputs
- Configurable as an I 2 C or SPI controller
- Sleep state V+ supply current: 5.5 μA typical
- Low power cell monitoring
- 48-lead LFCSP\_SS package with exposed pad
- AEC-Q100 qualified for automotive applications

## APPLICATIONS

- Electric and hybrid electric vehicles
- Backup battery systems
- Grid energy storage
- Large portable power banks

## ADBMS6815M

## 12-Channel Multicell Battery Monitor

## TYPICAL APPLICATION CIRCUIT

Figure 1. Typical Application Circuit

<!-- image -->

## GENERAL DESCRIPTION

The ADBMS6815M is a multicell battery stack monitor that measures up to 12 series connected battery cells with a lifetime total measurement error (TME) of less than 1.9 mV. The cell measurement range of 0 V to 5 V makes the ADBMS6815M suitable for most battery chemistries. All 12 cells can be measured in 304 μs, and lower data acquisition rates can be selected for high noise reduction.

Multiple ADBMS6815M devices can be connected in series, permitting simultaneous cell monitoring of long, high voltage battery strings. Each ADBMS6815M has an isolated serial peripheral interface (isoSPI ™ ) interface for high speed, RF immune, long distance communications. Multiple devices are connected in a daisy chain with one host processor connection for all devices. This daisy chain can operate bidirectionally to ensure communication integrity even in the event of a fault along the communication path.

The ADBMS6815M can be powered directly from the battery stack or from an isolated supply. The ADBMS6815M includes passive balancing for each cell, with individual pulse-width modulation (PWM) duty cycle control for each cell. Other features include an on-board 5 V regulator, seven general-purpose input and output (GPIOx) lines, and a sleep state, where current consumption is reduced to 5.5 μA.

For more information about the ADBMS6815M, contact BMS\_Doc\_Request@analog.com.

Rev. Sp0

<!-- image -->

## NOTES

<!-- image -->