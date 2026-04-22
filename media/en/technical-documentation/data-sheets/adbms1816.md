<!-- lastmod 2025-07-01 -->
<!-- image -->

## FEATURES

- Measures up to 16 battery cells in series
- ±3 mV maximum total measurement error after software calibration (3.3 V)
- Stackable architecture for high-voltage systems
- Current measurement with coulomb counter
- Built-in isoSPI
- 2 Mbps isolated serial communication
- Low EMI susceptibility and emissions
- Bidirectional for broken wire protection
- Standard 4-wire SPI
- Configurable low-pass filter
- Passive cell balancing up to 300 mA (maximum) with programmable PWM
- 4 general-purpose digital outputs
- 7 temperature or sensor inputs
- I 2 C interface
- Alert output available
- VP supply current (TRANS = VMx, core = sleep, isoSPI = idle, VREG  = 0 V): 26 µA
- 64-lead LQFP with an exposed pad

## APPLICATIONS

- Backup battery systems and uninterruptible power supplies (UPS)
- Grid energy storage
- Residential energy storage
- E-bikes and E-scooters
- High-power portable equipment

## ADBMS1816

## Multicell Battery Monitor

## TYPICAL APPLICATION CIRCUIT

Figure 1. Battery Monitor with Daisy-Chain Interface (I SENSE Is the Current Sense for the RSx Pins.)

<!-- image -->

## GENERAL DESCRIPTION

The ADBMS1816 is a multicell battery stack monitor that measures up to 16 series connected battery cells with a total measurement error of less than 3 mV after software calibration. The cell measurement range of 0 V to 4.5 V makes the ADBMS1816 suitable for most battery chemistries. A programmable gain amplifier (PGA) is integrated to allow for the monitoring of various currents based on the target current range in the application. All 16 cells, stack voltage, and current can be measured in 116.8 μs.

Multiple ADBMS1816 devices can be connected in series, permitting simultaneous cell monitoring of long, high-voltage battery strings. Each ADBMS1816 has an isolated, serial peripheral interface (isoSPI) for high-speed, RF immune, and long-distance communication.

Multiple devices are connected in a daisy chain with one host processor connection for all devices. This daisy chain can operate bidirectionally, ensuring communication integrity, even in the event of a fault along the communication path.

The ADBMS1816 can be powered directly from the battery stack or from an isolated supply. The ADBMS1816 includes passive balancing for each cell, with individual pulse-width modulation (PWM) duty-cycle control for each cell. The ADBMS1816 has a dedicated ALERT output pin to indicate the fault state. Other features include an on-board 5 V regulator and a sleep mode, where the supply current consumption is reduced to 26 µA.

For more information about the ADBMS1816, contact svc\_CBMS\_Doc\_Req@analog.com.

## NOTES

<!-- image -->