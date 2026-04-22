<!-- lastmod 2025-03-27 -->
<!-- image -->

Data Shee t

## FEATURES

Battery pack current measurement Buffered analog inputs Continuous operation option Lossless measurement for coulomb counting 1 ms update rate ±0.1% maximum gain error ±1 µV maximum offset Redundant implementation Battery pack voltage measurement Buffered analog inputs Synchronous with current measurement Differential and single-ended mode Redundant implementation Up to 20 voltage measurement channels Buffered analog inputs On-demand operation Differential and single-ended mode Redundant implementation Built-in external reference True ratiometric measurements Overcurrent detection Triple redundancy with majority voting PWM output options Support for electric impedance spectroscopy Built-in isoSPI™ interface 2 Mbps isolated serial communications Capacitor or transformer coupled Daisy-chaining option 4-wire SPI option General-purpose digital IO Six general-purpose outputs (GPOs) Dual threshold read-back of GPOs Four GPIOs configurable as an I 2 C or SPI controller 48-Lead side-solderable QFN package AEC-Q100 qualified

Developed for use in ISO 26262 applications for automotive safety integrity level capability D (ASIL D)

## APPLICATIONS

Electric and hybrid electric vehicles Backup battery systems Grid energy storage

## Battery Pack Monitor

## ADBMS2970

## GENERAL DESCRIPTION

The ADBMS2970 is a battery pack monitor (also referred to as ADBMS Pack Monitor) for electrical and hybrid vehicles, and other current or voltage sense applications. It also supports EIS current channel and EIS pack voltage measurements.

The ADBMS2970 measures the current flowing in and out of a battery pack by sensing the voltage drop over a shunt resistor with very low offset. The ADBMS2970 measures EIS current by sensing voltage drops across the same shunt resistor.

Six digital outputs (GPO) supporting open-drain or push-pull mode can be used to control HV transistors to disconnect external resistor dividers. Four digital general-purpose inputs/outputs (GPIO) can also operate as an I 2 C/SPI controller interface to address external serial peripherals (such as EEPROM).

A total of 12 dedicated buffered high-impedance inputs (V1 to V10, VBAT1, and VBAT2) are provided for measuring voltages from external sensors or resistor dividers enabling measurement of pack voltages, temperatures, HV-Link voltages, chassis isolation, and supervision of the state of contactors and fuses. An additional eight buffered high-impedance inputs (V11 to V18) are available in certain configurations for a total of 20 inputs. The built-in serial interface of the ADBMS Pack Monitor can be configured for SPI or isolated isoSPI communication with the BMS controller. It has an additional isoSPI port, which allows connecting a daisy-chain of ADBMS Pack Monitor devices, optionally extended with

ADBMS6840/6842/6843 cell monitors (ADBMS cell monitors).

Table 1. ADBMS2970 Feature Overview

| FEATURE               | ADBMS2970   |
|-----------------------|-------------|
| isoSPI Ports          | 2           |
| SPI                   | 1           |
| Current Channels      | 2           |
| Overcurrent Channels  | 3           |
| Pack Voltage Channels | 2           |
| HV Voltage Channels   | 10 to 18    |
| GPOs                  | 6           |
| GPIOs                 | 4           |
| EIS Channels          | 2           |

## ADBMS2970

## NOTES

<!-- image -->

Data Sheet