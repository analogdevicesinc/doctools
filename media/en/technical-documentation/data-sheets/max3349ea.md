<!-- lastmod 2022-08-02 -->
<!-- image -->

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## General Description

The MAX3349EA ±15kV ESD-protected, USB transceiver provides a full-speed USB interface to a lower voltage microprocessor or ASIC. The device supports enumeration,  suspend, and VBUS detection. A special UART multiplexing mode routes external UART signals (Rx and Tx) to D+ and D-, allowing the use of a shared connector to reduce cost and part count for mobile devices.

The UART interface allows mobile devices such as PDAs, cellular phones, and digital cameras to use either UART or USB signaling through the same connector. The MAX3349EA features a separate UART voltage supply input to support legacy devices using +2.75V signaling. The MAX3349EA supports a maximum UART baud rate of 921kbaud.

Upon connection to a USB host, the MAX3349EA enters USB mode and provides a full-speed USB 2.0 compliant i nterface  through  VP,  VM,  RCV,  and OE .  The MAX3349EA features internal series termination resistors on D+ and D-, and an internal 1.5k Ω pullup resistor to D+ to allow the device to logically connect and disconnect from the USB while plugged in. A suspend mode is provided for low-power operation. D+ and D- are protected from electrostatic discharge (ESD) up to ±15kV.

The MAX3349EA is available in 16-pin TQFN (4mm x 4mm) and 16-bump UCSP™ (2mm x 2mm) packages, and is specified over the -40°C to +85°C extended temperature range.

Applications

## Features

- ♦ ±15kV ESD HBM Protection on D+ and D-
- ♦ UART Mode Routes External UART Signals to D+/D-
- ♦ Internal Linear Regulator Allows Direct Powering from the USB Cable
- ♦ Separate Voltage Input for UART Transmitter/Receiver (VUART)
- ♦ Internal 1.5k Ω Pullup Resistor on D+ Controlled by Enumerate Input
- ♦ Internal Series Termination Resistors on D+ and D-
- ♦ Complies with USB Specification Revision 2.0, Full-Speed 12Mbps Operation
- ♦ Built-In Level Shifting Down to +1.4V, Ensuring Compatibility with Low-Voltage ASICs
- ♦ VBUS Detection
- ♦ Combined VP and VM Inputs/Outputs
- ♦ No Power-Supply Sequencing Required
- ♦ Available in 16-Bump UCSP (2mm x 2mm) Package

## Ordering Information

| PART           | PIN-PACKAGE   | PKG CODE   |
|----------------|---------------|------------|
| MAX3349EAEBE+T | 16 UCSP       | B16-1      |
| MAX3349EAETE** | 16 TQFN-EP*   | T1644-4    |

Note: All devices specified for the -40°C to +85°C extended temperature range.

- ** Future product-contact factory for availability.

* EP = Exposed paddle.

+ Indicates lead-free package.

## Pin Configurations

UCSP is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

Cell Phones

PDAs

Digital Cameras

MP3 Players

1

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## ABSOLUTE MAXIMUM RATINGS

| (All voltages referenced to GND, unless otherwise noted.)                                                               |
|-------------------------------------------------------------------------------------------------------------------------|
| V UART , V L , V BUS , D+, D- ..........................................-0.3V to +6V                                    |
| V TRM .........................................................-0.3V to (V BUS + 0.3V)                                  |
| VP, VM, SUS, RX, TX, ENUM, RCV, OE , BD, -0.3V to (V L + 0.3V)                                                          |
| Short Circuit Current (D+ and D-)...................................±150mA                                              |
| Maximum Continuous Current (all other pins) .................±15mA                                                      |
| Continuous Power Dissipation (T A = +70°C)                                                                              |
| 16-Bump UCSP (derate 8.2mW/°C above +70°C) ....659.5mW                                                                  |
| 16-Pin 4mm x 4mm TQFN (derate 25.0mW/°C above +70°C).............................................................2000mW |

| Operating Temperature Range ...........................-40°C to +85°C            |
|----------------------------------------------------------------------------------|
| Junction Temperature .....................................................+150°C |
| Storage Temperature Range.............................-65°C to +150°C            |
| Lead Temperature (soldering, 10s) .................................+300°C        |
| Bump Temperature (soldering, reflow)............................+235°C           |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VBUS = +4.0V to +5.5V, VUART = +2.7V to +3.3V, VL = +1.40V to +2.75V, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VBUS = +5V, VL = +1.8V, VUART = +2.75V (UART Mode), and TA = +25°C.) (Note 1)

| PARAMETER                                             | SYMBOL                                                | CONDITIONS                                                          | MIN                                                   | TYP                                                   | MAX                                                   | UNITS                                                 |
|-------------------------------------------------------|-------------------------------------------------------|---------------------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| SUPPLY INPUTS/OUTPUTS (V BUS , V UART , V TRM , V L ) | SUPPLY INPUTS/OUTPUTS (V BUS , V UART , V TRM , V L ) | SUPPLY INPUTS/OUTPUTS (V BUS , V UART , V TRM , V L )               | SUPPLY INPUTS/OUTPUTS (V BUS , V UART , V TRM , V L ) | SUPPLY INPUTS/OUTPUTS (V BUS , V UART , V TRM , V L ) | SUPPLY INPUTS/OUTPUTS (V BUS , V UART , V TRM , V L ) | SUPPLY INPUTS/OUTPUTS (V BUS , V UART , V TRM , V L ) |
| V BUS Input Range                                     | V BUS                                                 | USB mode                                                            | 4.0                                                   |                                                       | 5.5                                                   | V                                                     |
| V L Input Range                                       | V L                                                   |                                                                     | 1.40                                                  |                                                       | 2.75                                                  | V                                                     |
| V UART Input Range                                    | V UART                                                | UART mode                                                           | 2.7                                                   |                                                       | 3.3                                                   | V                                                     |
| Regulated Supply-Voltage Output                       | V TRM                                                 | Internal regulator, USB mode                                        | 3.0                                                   |                                                       | 3.6                                                   | V                                                     |
| Operating V BUS Supply Current                        | I BUS                                                 | Full-speed transmitting/receiving at 12Mbps, CL = 50pF on D+ and D- |                                                       |                                                       | 10                                                    | mA                                                    |
| Operating V UART Supply Current                       | I VUART                                               | UART transmitting/receiving at 921kbaud, CL = 200pF                 |                                                       |                                                       | 2.5                                                   | mA                                                    |
| Static V UART Supply Current                          | I VUART(STATIC)                                       | UART mode                                                           |                                                       | 3.5                                                   | 5                                                     | µA                                                    |
| Operating V L Supply Current                          | I VL                                                  | Full-speed transmitting/receiving at 12Mbps, CL = 50pF on D+ and D- |                                                       |                                                       | 6                                                     | mA                                                    |
| Full-Speed Idle and SE0 Supply Current                | I VBUS(IDLE)                                          | Full-speed idle, V D+ > +2.7V, V D- < +0.3V                         |                                                       | 290                                                   | 400                                                   | µA                                                    |
|                                                       | I VBUS(IDLE)                                          | SE0: V D+ < +0.3V, V D- < +0.3V                                     |                                                       | 340                                                   | 450                                                   | µA                                                    |
| Static V L Supply Current                             | I VL(STATIC)                                          | Full-speed idle, SE0, suspend mode, or static UART mode             |                                                       | 2                                                     | 10                                                    | µA                                                    |
| Sharing Mode V L Supply Current                       | I VL(OFF)                                             | V BUS and V UART not present                                        |                                                       | 2                                                     | 5                                                     | µA                                                    |
| USB Suspend V BUS Supply Current                      | I VBUS(SUS)                                           | VM, VP unconnected; OE = 1, SUS = 1                                 |                                                       | 38                                                    | 65                                                    | µA                                                    |
| V BUS DETECTION (BD)                                  | V BUS DETECTION (BD)                                  | V BUS DETECTION (BD)                                                | V BUS DETECTION (BD)                                  | V BUS DETECTION (BD)                                  | V BUS DETECTION (BD)                                  | V BUS DETECTION (BD)                                  |
| USB Power-Supply Detection                            | V TH_VBUS                                             | V L = +1.8V                                                         | 1.8                                                   | 2.7                                                   | 3.4                                                   | V                                                     |
| Threshold                                             | V TH_VBUS                                             | V L = +2.5V                                                         | 2.3                                                   | 3.2                                                   | 4.0                                                   | V                                                     |
| USB Power-Supply Detection Hysteresis                 | V HYS_VBUS                                            | V L = +1.8V                                                         |                                                       | 80                                                    |                                                       | mV                                                    |
| USB Power-Supply Detection Hysteresis                 | V HYS_VBUS                                            | V L = +2.5V                                                         |                                                       | 100                                                   |                                                       | mV                                                    |
| V L Power-Supply Detection Threshold                  | V TH_VL                                               |                                                                     |                                                       | 0.7                                                   |                                                       | V                                                     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## ELECTRICAL CHARACTERISTICS (continued)

(VBUS = +4.0V to +5.5V, VUART = +2.7V to +3.3V, VL = +1.40V to +2.75V, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VBUS = +5V, VL = +1.8V, VUART = +2.75V (UART Mode), and TA = +25°C.) (Note 1)

| PARAMETER                                                        | SYMBOL                                                           | CONDITIONS                                                       | MIN                                                              | TYP                                                              | MAX                                                              | UNITS                                                            |
|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| V UART Power-Supply Detection Threshold                          | V TH_UART                                                        |                                                                  | 0.4 x V L                                                        | 0.65 x V L                                                       | 0.9 x V L                                                        | V                                                                |
| DIGITAL INPUTS/OUTPUTS (VP, VM, RCV, SUS, OE , RX, TX, ENUM, BD) | DIGITAL INPUTS/OUTPUTS (VP, VM, RCV, SUS, OE , RX, TX, ENUM, BD) | DIGITAL INPUTS/OUTPUTS (VP, VM, RCV, SUS, OE , RX, TX, ENUM, BD) | DIGITAL INPUTS/OUTPUTS (VP, VM, RCV, SUS, OE , RX, TX, ENUM, BD) | DIGITAL INPUTS/OUTPUTS (VP, VM, RCV, SUS, OE , RX, TX, ENUM, BD) | DIGITAL INPUTS/OUTPUTS (VP, VM, RCV, SUS, OE , RX, TX, ENUM, BD) | DIGITAL INPUTS/OUTPUTS (VP, VM, RCV, SUS, OE , RX, TX, ENUM, BD) |
| Input Voltage Low                                                | V IL                                                             |                                                                  |                                                                  |                                                                  | 0.3 x V L                                                        | V                                                                |
| Input Voltage High                                               | V IH                                                             |                                                                  | 0.7 x V L                                                        |                                                                  |                                                                  | V                                                                |
| Output Voltage Low                                               | V OL                                                             | I OL = +2mA, V L > 1.65V I OL = +1mA, V L < 1.65V                |                                                                  |                                                                  | 0.4                                                              | V                                                                |
| Output Voltage High                                              | V OH                                                             | I OH = +2mA, V L > 1.65V I OH = +1mA, V L < 1.65V                | V L - 0.4                                                        |                                                                  |                                                                  | V                                                                |
| Input Leakage Current                                            | I LKG                                                            |                                                                  | -1                                                               |                                                                  | +1                                                               | µA                                                               |
| ANALOG INPUTS/OUTPUTS (D+, D- in USB Mode)                       | ANALOG INPUTS/OUTPUTS (D+, D- in USB Mode)                       | ANALOG INPUTS/OUTPUTS (D+, D- in USB Mode)                       | ANALOG INPUTS/OUTPUTS (D+, D- in USB Mode)                       | ANALOG INPUTS/OUTPUTS (D+, D- in USB Mode)                       | ANALOG INPUTS/OUTPUTS (D+, D- in USB Mode)                       | ANALOG INPUTS/OUTPUTS (D+, D- in USB Mode)                       |
| Differential Input Sensitivity                                   | V ID                                                             | &#124; V D+ - V D- &#124;                                        | 0.2                                                              |                                                                  |                                                                  | V                                                                |
| Differential Common-Mode Voltage                                 | V CM                                                             | Includes V ID range                                              | 0.8                                                              |                                                                  | 2.5                                                              | V                                                                |
| Single-Ended Input Low Voltage                                   | V ILSE                                                           |                                                                  |                                                                  |                                                                  | 0.8                                                              | V                                                                |
| Single-Ended Input High Voltage                                  | V IHSE                                                           |                                                                  | 2.0                                                              |                                                                  |                                                                  | V                                                                |
| USB Output Voltage Low                                           | V USB_OLD                                                        | R L = 1.5k Ω connected to +3.6V                                  |                                                                  |                                                                  | 0.3                                                              | V                                                                |
| USB Output Voltage High                                          | V USB_OHD                                                        | R L = 15k Ω connected to GND                                     | 2.8                                                              |                                                                  | 3.6                                                              | V                                                                |
| Off-State Leakage Current                                        | I LZ                                                             |                                                                  | -10                                                              |                                                                  | +10                                                              | µA                                                               |
| Driver Output Impedance                                          | Z DRV                                                            | Steady-state drive                                               | 29.0                                                             | 38                                                               | 43.5                                                             | Ω                                                                |
| Transceiver Capacitance                                          | CIND                                                             | Measured from D+/D- to GND                                       |                                                                  | 20                                                               |                                                                  | pF                                                               |
| Input Impedance                                                  | Z IN                                                             | Driver off                                                       | 0.9                                                              | 1.3                                                              | 2.0                                                              | M Ω                                                              |
| D+ Internal Pullup Resistor                                      | R PU                                                             | ENUM = 1                                                         | 1425                                                             | 1500                                                             | 1575                                                             | Ω                                                                |
| ANALOG INPUTS/OUTPUTS (D+, D- in UART Mode)                      | ANALOG INPUTS/OUTPUTS (D+, D- in UART Mode)                      | ANALOG INPUTS/OUTPUTS (D+, D- in UART Mode)                      | ANALOG INPUTS/OUTPUTS (D+, D- in UART Mode)                      | ANALOG INPUTS/OUTPUTS (D+, D- in UART Mode)                      | ANALOG INPUTS/OUTPUTS (D+, D- in UART Mode)                      | ANALOG INPUTS/OUTPUTS (D+, D- in UART Mode)                      |
| Input Voltage High                                               | V UART_IH                                                        | UART mode, +2.70 < V UART < +2.85V                               | 2.0                                                              |                                                                  |                                                                  | V                                                                |
| Input Voltage Low                                                | V UART_IL                                                        | UART mode, +2.70V < V UART < +2.85V                              |                                                                  |                                                                  | 0.8                                                              | V                                                                |
| Output Voltage High                                              | V UART_OH                                                        | UART mode, +2.70V < V UART < +2.85V I UART_OH = -2mA             | 2.2                                                              |                                                                  |                                                                  | V                                                                |
| Output Voltage Low                                               | V UART_OL                                                        | UART mode, +2.70V < V UART < +2.85V I UART_OL = +2mA             |                                                                  |                                                                  | 0.4                                                              | V                                                                |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## ELECTRICAL CHARACTERISTICS (continued)

(VBUS = +4.0V to +5.5V, VUART = +2.7V to +3.3V, VL = +1.40V to +2.75V, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VBUS = +5V, VL = +1.8V, VUART = +2.75V (UART Mode), and TA = +25°C.) (Note 1)

| PARAMETER                       | SYMBOL                  | CONDITIONS              | TYP                     | MAX                     | UNITS                   |                         |
|---------------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|-------------------------|
| ESD PROTECTION (D+, D-)         | ESD PROTECTION (D+, D-) | ESD PROTECTION (D+, D-) | ESD PROTECTION (D+, D-) | ESD PROTECTION (D+, D-) | ESD PROTECTION (D+, D-) | ESD PROTECTION (D+, D-) |
| Human Body Model                |                         | (Figures 9 and 10)      | ±15                     |                         | kV                      |                         |
| IEC 61000-4-2 Air-Gap Discharge |                         |                         | ±8                      |                         | kV                      |                         |
| IEC 61000-4-2 Contact Discharge |                         |                         | ±8                      |                         | kV                      |                         |

## TIMING CHARACTERISTICS

(VBUS = +4.0V to +5.5V, VUART = +2.7V to +3.3V, VL = +1.4V to +2.75V, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VBUS = +5V, VL = +1.8V, VUART = +2.75V (UART Mode), and TA = +25°C.) (Note 1)

| PARAMETER                                 | SYMBOL                                    | CONDITIONS                                                                | MIN                                       | TYP                                       | MAX                                       | UNITS                                     |
|-------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| USB DRIVER CHARACTERISTICS (C L = 50pF)   | USB DRIVER CHARACTERISTICS (C L = 50pF)   | USB DRIVER CHARACTERISTICS (C L = 50pF)                                   | USB DRIVER CHARACTERISTICS (C L = 50pF)   | USB DRIVER CHARACTERISTICS (C L = 50pF)   | USB DRIVER CHARACTERISTICS (C L = 50pF)   | USB DRIVER CHARACTERISTICS (C L = 50pF)   |
| Rise Time                                 | t FR                                      | 10% to 90% of &#124; V USB_OHD - V USB_OLD &#124; (Figures 1 and 7)       | 4                                         |                                           | 20                                        | ns                                        |
| Fall Time                                 | t FF                                      | 90% to 10% of &#124; V USB_OHD - V USB_OLD &#124; (Figures 1 and 7)       | 4                                         |                                           | 20                                        | ns                                        |
| Rise/Fall Time Matching                   | t FR /t FF                                | Excluding the first transition from idle state (Note 2) (Figures 1 and 7) | 90                                        |                                           | 110                                       | %                                         |
| Output Signal Crossover Voltage           | V CRS_F                                   | Excluding the first transition from idle state (Note 2) (Figure 2)        | 1.3                                       |                                           | 2.0                                       | V                                         |
| Driver Propagation Delay                  | t PLH_DRV                                 | V L > +1.65V (Figures 2 and 7)                                            |                                           |                                           | 22.5                                      | ns                                        |
| Driver Propagation Delay                  | t PLH_DRV                                 | +1.4V < V L < +1.65V (Figures 2 and 7)                                    |                                           |                                           | 25                                        | ns                                        |
| Driver Propagation Delay                  | t PHL_DRV                                 | V L > +1.65V (Figures 2 and 7)                                            |                                           |                                           | 22.5                                      | ns                                        |
| Driver Propagation Delay                  | t PHL_DRV                                 | +1.4V < V L < +1.65V (Figures 2 and 7)                                    |                                           |                                           | 25                                        | ns                                        |
| Driver Disable Delay                      | t PHZ_DRV                                 | High-to-off transition (Figures 3 and 6)                                  |                                           |                                           | 25                                        | ns                                        |
| Driver Disable Delay                      | t PLZ_DRV                                 | Low-to-off transition (Figures 3 and 6)                                   |                                           |                                           | 25                                        | ns                                        |
| Driver Enable Delay                       | t PZH_DRV                                 | Off-to-high transition (Figures 3 and 7)                                  |                                           |                                           | 25                                        | ns                                        |
| Driver Enable Delay                       | t PZL_DRV                                 | Off-to-low transition (Figures 3 and 7)                                   |                                           |                                           | 25                                        | ns                                        |
| USB RECEIVER CHARACTERISTICS (C L = 15pF) | USB RECEIVER CHARACTERISTICS (C L = 15pF) | USB RECEIVER CHARACTERISTICS (C L = 15pF)                                 | USB RECEIVER CHARACTERISTICS (C L = 15pF) | USB RECEIVER CHARACTERISTICS (C L = 15pF) | USB RECEIVER CHARACTERISTICS (C L = 15pF) | USB RECEIVER CHARACTERISTICS (C L = 15pF) |
| Differential Receiver Propagation Delay   | t PLH_RCV                                 | V L > +1.65V (Figures 4 and 8)                                            |                                           |                                           | 25                                        | ns                                        |
| Differential Receiver Propagation Delay   | t PLH_RCV                                 | +1.4V < V L < +1.65V (Figures 4 and 8)                                    |                                           |                                           | 30                                        | ns                                        |
| Differential Receiver Propagation Delay   | t PHL_RCV                                 | V L > +1.65V (Figures 4 and 8)                                            |                                           |                                           | 25                                        | ns                                        |
| Differential Receiver Propagation Delay   | t PHL_RCV                                 | 1.4V < V L < +1.65V (Figures 4 and 8)                                     |                                           |                                           | 30                                        | ns                                        |
| Single-Ended Receiver Propagation Delay   | t PLH_SE                                  | V L > +1.65V (Figures 4 and 8)                                            |                                           |                                           | 28                                        | ns                                        |
| Single-Ended Receiver Propagation Delay   | t PLH_SE                                  | +1.4V < V L < +1.65V (Figures 4 and 8)                                    |                                           |                                           | 35                                        | ns                                        |
| Single-Ended Receiver Propagation Delay   | t PHL_SE                                  | V L > +1.65V (Figures 4 and 8)                                            |                                           |                                           | 28                                        | ns                                        |
| Single-Ended Receiver Propagation Delay   | t PHL_SE                                  | +1.4V < V L < +1.65V (Figures 4 and 8)                                    |                                           |                                           | 35                                        | ns                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## TIMING CHARACTERISTICS (continued)

(VBUS = +4.0V to +5.5V, VUART = +2.7V to +3.3V, VL = +1.4V to +2.75V, TA = -40°C to +85°C, unless otherwise noted. Typical values are at VBUS = +5V, VL = +1.8V, VUART = +2.75V (UART Mode), and TA = +25°C.) (Note 1)

| PARAMETER                                  | SYMBOL                                     | CONDITIONS                                              | TYP                                        | MAX                                        | UNITS                                      |                                            |
|--------------------------------------------|--------------------------------------------|---------------------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| Single-Ended Receiver Disable Delay        | t PHZ_SE                                   | High-to-off transition, V L > +1.65V (Figure 5)         |                                            | 10                                         | ns                                         |                                            |
| Single-Ended Receiver Disable Delay        |                                            | High-to-off transition, +1.4V < V L < +1.65V (Figure 5) |                                            | 12                                         | ns                                         |                                            |
| Single-Ended Receiver Disable Delay        | t PLZ_SE                                   | Low-to-off transition, V L > +1.65V (Figure 5)          |                                            | 10                                         | ns                                         |                                            |
| Single-Ended Receiver Disable Delay        |                                            | Low-to-off transition, +1.4V < V L < +1.65V (Figure 5)  |                                            | 12                                         | ns                                         |                                            |
| Single-Ended Receiver Enable Delay         | t PZH_SE                                   | Off-to-high transition, V L > +1.65V (Figure 5)         |                                            | 20                                         | ns                                         |                                            |
| Single-Ended Receiver Enable Delay         |                                            | Off-to-high transition, +1.4V < V L < +1.65 (Figure 5)  |                                            | 20                                         | ns                                         |                                            |
| Single-Ended Receiver Enable Delay         | t PZL_SE                                   | Off-to-low transition, V L > +1.65V (Figure 5)          |                                            | 20                                         | ns                                         |                                            |
| Single-Ended Receiver Enable Delay         |                                            | Off-to-low transition, +1.4V < V L < +1.65V (Figure 5)  |                                            | 20                                         | ns                                         |                                            |
| UART DRIVER CHARACTERISTICS (C L = 200pF)  | UART DRIVER CHARACTERISTICS (C L = 200pF)  | UART DRIVER CHARACTERISTICS (C L = 200pF)               | UART DRIVER CHARACTERISTICS (C L = 200pF)  | UART DRIVER CHARACTERISTICS (C L = 200pF)  | UART DRIVER CHARACTERISTICS (C L = 200pF)  | UART DRIVER CHARACTERISTICS (C L = 200pF)  |
| Rise Time (D-)                             | t FR_TUART                                 | 10% to 90% of &#124; V OHD - V OLD &#124; (Figure 13)   | 60                                         | 200                                        | ns                                         |                                            |
| Fall Time (D-)                             | t FF_TUART                                 | 90% to 10% of &#124; V OHD - V OLD &#124; (Figure 13)   | 60                                         | 200                                        | ns                                         |                                            |
| Driver Propagation Delay                   | t PLH_TUART                                | (Figure 13)                                             | 70                                         | 200                                        | ns                                         |                                            |
| Driver Propagation Delay                   | t PHL_TUART                                | (Figure 13)                                             | 70                                         | 200                                        | ns                                         |                                            |
| UART RECEIVER CHARACTERISTICS (C L = 15pF) | UART RECEIVER CHARACTERISTICS (C L = 15pF) | UART RECEIVER CHARACTERISTICS (C L = 15pF)              | UART RECEIVER CHARACTERISTICS (C L = 15pF) | UART RECEIVER CHARACTERISTICS (C L = 15pF) | UART RECEIVER CHARACTERISTICS (C L = 15pF) | UART RECEIVER CHARACTERISTICS (C L = 15pF) |
| Receiver (Rx) Propagation Delay            | t PLH_RUART                                | (Figure 14)                                             |                                            | 60                                         | ns                                         |                                            |
| Receiver (Rx) Propagation Delay            | t PHL_RUART                                | (Figure 14)                                             |                                            | 60                                         | ns                                         |                                            |
| Receiver (Rx) Rise/Fall Time               | t FR_RUART                                 | (Figure 14)                                             |                                            | 45                                         | ns                                         |                                            |
| Receiver (Rx) Rise/Fall Time               | t FF_RUART                                 | (Figure 14)                                             |                                            | 45                                         | ns                                         |                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Note 1: Parameters are 100% production tested at TA =+25°C, unless otherwise noted. Limits over temperature are guaranteed by design.

Note 2: Guaranteed by design, not production tested.

<!-- image -->

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## Typical Operating Characteristics

(VBUS = +5V, VL = +3.3V, VUART = +2.75V, TA = +25°C, unless otherwise noted.)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## Pin Description

| PIN   | PIN   | TYPE   | NAME   | FUNCTION                                                                                                                                                                                                                                           |
|-------|-------|--------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| UCSP  | TQFN  |        |        | FUNCTION                                                                                                                                                                                                                                           |
| A1    | 1     | POWER  | V UART | UART Supply Voltage. V UART powers the internal UART transmitter and receiver. Connect a regulated voltage between +2.7V and +3.3V to V UART . Bypass V UART to GND with a 0.1µF ceramic capacitor.                                                |
| A2    | 2     | OUTPUT | RX     | UART Receive Output. In UART mode, RX is a level-shifted output that expresses the logic state of D+.                                                                                                                                              |
| A3    | 3     | INPUT  | TX     | UART Transmit Input. In UART mode, D- follows the logic state on TX.                                                                                                                                                                               |
| A4    | 4     | OUTPUT | BD     | USB Detect Output. When V BUS exceeds the V TH-BUS threshold, BD is logic-high to indicate that the MAX3349E is connected to a USB host. The MAX3349E operates in USB mode when BD is logic-high, and operates in UART mode when BD is logic- low. |
| B1    | 15    | POWER  | V L    | Digital Logic Supply. Connect a +1.4V to +2.75V supply to V L . Bypass V L to GND with a 0.1µF or larger ceramic capacitor.                                                                                                                        |
| B2    | 16    | I/O    | VM     | Receiver Output/Driver Input. VM functions as a receiver output when OE = V L . VM follows the logic state of D- when receiving. VM functions as a driver input when OE = GND (Tables 2 and 3).                                                    |
| B3    | 5     | I/O    | VP     | Receiver Output/Driver Input. VP functions as a receiver output when OE = V L . VP follows the logic state of D+ when receiving. VP functions as a driver input when OE = GND (Tables 2 and 3).                                                    |
| B4    | 6     | OUTPUT | RCV    | Differential Receiver Output. In USB mode, RCV is the output of the USB differential receiver (Table 3).                                                                                                                                           |
| C1    | 14    | POWER  | V TRM  | Internal Regulator Output. V TRM provides a regulated +3.3V output. Bypass V TRM to GND with a 1µF ceramic capacitor. V TRM draws power from V BUS . Do not power external circuitry from V TRM .                                                  |
| C2    | 13    | INPUT  | ENUM   | Enumerate Input. Drive ENUM to V L to connect the internal 1.5k Ω resistor from D+ to V TRM (when V BUS is present). Drive ENUM to GND to disconnect the internal 1.5k Ω pullup resistor. ENUM has no effect when the device is in UART mode.      |
| C3    | 8     | INPUT  | SUS    | Suspend Input. Drive SUS low for normal operation. Drive SUS high to force the MAX3349E into suspend mode.                                                                                                                                         |
| C4    | 7     | INPUT  | OE     | Output Enable. Drive OE low to set VP/VM to transmitter inputs in USB mode. Drive OE high to set VP/VM to receiver outputs in USB mode. OE has no effect when the device is in UART mode.                                                          |
| D1    | 12    | POWER  | V BUS  | USB Supply Voltage. V BUS provides power to the internal linear regulator when in USB mode. Bypass V BUS to GND with a 0.1µF ceramic capacitor.                                                                                                    |
| D2    | 11    | I/O    | D+     | USB Differential Data Input/Output. Connect D+ directly to the USB connector.                                                                                                                                                                      |
| D3    | 10    | I/O    | D-     | USB Differential Data Input/Output. Connect D- directly to the USB connector.                                                                                                                                                                      |
| D4    | 9     | POWER  | GND    | Ground                                                                                                                                                                                                                                             |
| -     | EP    | -      | EP     | Exposed Paddle. Connect exposed paddle to GND.                                                                                                                                                                                                     |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## Timing Diagrams

<!-- image -->

Figure 3. Driver Enable and Disable Timing

<!-- image -->

Figure 4. D+/D- Timing to VP, VM, and RCV

Figure 1. Rise and Fall Times

<!-- image -->

Figure 2. Timing of VP and VM to D+ and D-

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## Timing Diagrams (continued)

<!-- image -->

Figure 7. Test Circuit for Enable Time, Transmitter Propagation Delay, and Transmitter Rise/Fall Time

Figure 8. Test Circuit for Receiver Propagation Delay

<!-- image -->

Figure 9. Human Body ESD Test Model

<!-- image -->

input. The MAX3349EA supports a maximum UART baud rate of 921kbaud.

Upon connection to a USB host, the MAX3349EA enters USB mode and provides a full-speed USB 2.0 compliant interface through VP, VM, RCV, and OE . The MAX3349EA features internal series resistors on D+ and D-, and an internal 1.5k Ω pullup resistor to D+ to allow the device to logically connect and disconnect from the USB bus while plugged in. A suspend mode is provided for low-power operation. D+ and D- are protected from electrostatic discharge (ESD) up to ±15kV. To ensure full ±15kV ESD protection, bypass VBUS to

Figure 5. Receiver Enable and Disable Timing

<!-- image -->

Figure 6. Test Circuit for Disable Time

<!-- image -->

## Detailed Description

The MAX3349EA ±15kV ESD-protected, USB transceiver provides a full-speed USB interface to a microprocessor or ASIC. The device supports enumeration, suspend, and VBUS detection. A special UART multiplexing mode routes external UART signals (Rx and Tx) to D+ and D-, allowing the use of a shared connector to reduce cost and part count for mobile devices.

The UART interface allows mobile devices such as PDAs, cellular phones, and digital cameras to use either UART or USB  signaling  through  the  same  connector.  The MAX3349EA features a separate UART voltage supply

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## Timing Diagrams (continued)

Figure 12. IEC 61000-4-2 Contact Discharge Model Current Waveform

<!-- image -->

## USB Mode

In USB mode, the MAX3349EA implements a full-speed (12Mbps) USB interface on D+ and D-, with enumerate and suspend functions. A differential USB receiver presents the USB state as a logic-level output RCV (Table 3a). VP/VM are outputs of single-ended USB receivers when OE is  logic-high,  allowing  detection  of  singleended 0 (SE0) events. When OE is  logic-low,  VP  and VM serve as inputs to the USB transmitter. Drive suspend input SUS logic-high to force the MAX3349EA into a low-power operating mode and disable the differential USB receiver (Table 3b).

## UART Mode

The MAX3349EA operates in UART mode when BD is logic-low (VBUS not present). The Rx signal is the output of a single-ended receiver on D+, and the Tx input is driven out on D-. Signaling voltage thresholds for D+ and D- are determined by VUART, an externally applied voltage between +2.7V and +3.3V.

## Power-Supply Configurations

## VL Logic Supply

In both USB and UART modes, the control interface is powered from VL. The MAX3349EA operates with logicside voltage (VL) as low as +1.4V, providing level shifting for lower voltage ASICs and microcontrollers.

Figure 10. Human Body Model Current Waveform

<!-- image -->

Figure 11. IEC61000-4-2 ESD Contact Discharge Test Model

<!-- image -->

GND with a 0.1µF ceramic capacitor as close to the device as possible. There are high-impedance resistors ~2M Ω to  ground on D+ and D- to prevent floating nodes when in UART mode and nothing is connected.

## Operating Modes

The MAX3349EA operates in either USB mode or UART mode, depending on the presence or absence of  VBUS.  Bus  detect  output  BD  is  logic-high  when  a voltage higher than VTH-VBUS is applied to VBUS, and logic-low otherwise. The MAX3349EA operates in USB mode when BD is logic-high, and UART mode when BD is logic-low.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

Table 1. Power-Supply Configuration

| V BUS (V)          | V TRM (V)           | V L (V)            | V UART (V)                          | CONFIGURATION   |
|--------------------|---------------------|--------------------|-------------------------------------|-----------------|
| +4.0 to +5.5       | +3.0 to +3.6 Output | +1.4 to +2.75      | GND, Unconnected, or +2.7V to +3.3V | USB Mode        |
| +4.0 to +5.5       | +3.0 to +3.6 Output | GND or Unconnected | GND, Unconnected, or +2.7V to +3.3V | Disable Mode    |
| GND or Unconnected | High Impedance      | +1.4 to +2.75      | +2.7V to +3.3V                      | UART Mode       |

Table 2. USB Transmit Truth Table ( OE = 0)

| INPUTS   | INPUTS   | OUTPUTS   | OUTPUTS   |
|----------|----------|-----------|-----------|
| VP       | VM       | D+        | D-        |
| 0        | 0        | 0         | 0         |
| 0        | 1        | 0         | 1         |
| 1        | 0        | 1         | 0         |
| 1        | 1        | 1         | 1         |

## Table 3a. USB Receive Truth Table ( OE = 1, SUS = 0)

| INPUTS   | INPUTS   | OUTPUTS   | OUTPUTS   | OUTPUTS   |
|----------|----------|-----------|-----------|-----------|
| D+       | D-       | VP        | VM        | RCV       |
| 0        | 0        | 0         | 0         | RCV*      |
| 0        | 1        | 0         | 1         | 0         |
| 1        | 0        | 1         | 0         | 1         |
| 1        | 1        | 1         | 1         | X         |

X = Undefined.

## Table 3b. USB Receive Truth Table ( OE = 1, SUS = 1)

| INPUTS   | INPUTS   | OUTPUTS   | OUTPUTS   | OUTPUTS   |
|----------|----------|-----------|-----------|-----------|
| D+       | D-       | VP        | VM        | RCV       |
| 0        | 0        | 0         | 0         | 0         |
| 0        | 1        | 0         | 1         | 0         |
| 1        | 0        | 1         | 0         | 0         |
| 1        | 1        | 1         | 1         | 0         |

## UART Mode

Connect VL and VUART to system power supplies, and leave VBUS unconnected or below VTH-BUS to operate the MAX3349EA in UART mode. The MAX3349EA supports VUART from +2.7V to +3.3V (see Table 1).

## USB Control Signals

## OE

OE controls the direction of communication for USB mode. When OE is  logic-low,  VP  and  VM  operate as logic inputs, and D+/D- are outputs. When OE is logichigh, VP and VM operate as logic outputs, and D+/Dare inputs. RCV is the output of the differential USB receiver connected to D+/D-, and is not affected by the OE logic level.

## ENUM

Drive ENUM logic-high to enable the internal 1.5k Ω pullup resistor from D+ to VTRM. Drive ENUM logic-low to disable the internal pullup resistor and logically disconnect the MAX3349EA from the USB.

## SUS

Operate the MAX3349EA in low-power USB suspend mode by driving SUS logic-high. In suspend mode, the USB differential receiver is turned off and VBUS  consumes 38µA (typ) of supply current. The single-ended VP and VM receivers remain active to detect a SE0 state on USB bus lines D+ and D-. The USB transmitter remains enabled in suspend mode to allow transmission of a remote wake-up on D+ and D-.

## USB Mode

The MAX3349EA is in USB mode when VBUS is greater than VTH-BUS and the bus detect output (BD) is logichigh. In USB mode, power for the MAX3349EA is derived from VBUS, typically provided through the USB connector. An internal linear regulator generates the required +3.3V VTRM voltage from VBUS. VTRM powers the internal USB transceiver circuitry and the D+ enumeration resistor. Bypass VTRM to GND with a 1µF ceramic capacitor as close to the device as possible. Do not power external circuitry from VTRM.

## Disable Mode

Connect VBUS to a system power supply and leave VL unconnected or connect to ground to enter disable mode. In disable mode, D+ and D- are high impedance, and withstand external signals up to +5.5V. OE , SUS, and control signals are ignored.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## D+ and D-

D+ and D- are either USB signals or UART signals, depending on the operating mode. In USB mode, D+/D- serve as receiver inputs when OE is  logic-high and transmitter outputs when OE is  logic-low.  Internal series resistors are provided on D+ and D- to allow a direct interface with a USB connector. In UART mode, D+ is an input and D- is an output. UART signals on Tx are presented on D-, and signals on D+ are presented on Rx. The UART signaling levels for D+/D- are determined by VUART. Logic thresholds for Rx and Tx are determined by VL. D+ and D- are ESD protected to ±15kV HBM.

## RCV

RCV is the output of the differential USB receiver. RCV is a logic 1 for D+ high and D- low. RCV is a logic 0 for D+ low and D- high. RCV retains the last valid logic state when D+ and D- are both low (SE0). RCV is driven logic-low when SUS is high. See Tables 3a and 3b.

## BD

The bus-detect (BD) output is asserted logic-high when a voltage greater than VTH-BUS is presented on VBUS. This is typically the case when the MAX3349EA is connected to a powered USB. BD is logic-low when VBUS is unconnected.

## ESD Protection

As with all Maxim devices, ESD-protection structures are incorporated on all pins to protect against electrostatic  discharges encountered during handling and assembly. Additional ESD-protection structures guard D+ and D- against damage from ESD events up to ±15kV. The ESD structures arrest ESD events in all operating modes: normal operation, suspend mode, and when the device is unpowered.

Several ESD testing standards exist for gauging the robustness of ESD structures. The ESD protection of the MAX3349EA is characterized to the following standards:

- ±15kV Human Body Model (HBM)
- ±8kV Air-Gap Discharge per IEC 61000-4-2
- ±8kV Contact Discharge per IEC 61000-4-2

## Human Body Model

Figure 9 shows the model used to simulate an ESD event resulting from contact with the human body. The model consists of a 100pF storage capacitor that is charged to a high voltage, then discharged through a 1.5k Ω resistor.  Figure 10 shows the current waveform when the storage capacitor is discharged into a low impedance.

## IEC 61000-4-2 Contact Discharge

The IEC 61000-4-2 standard covers ESD testing and performance of finished equipment. It does not specifically refer to integrated circuits. The major difference between tests done using the Human Body Model and IEC 61000-4-2 is a higher peak current in IEC 61000-4-2 due to lower series resistance. Hence, the ESD withstand voltage measured to IEC 61000-4-2 is typically lower than that measured using the Human Body Model. Figure 11 shows the IEC 61000-4-2 model. The Contact Discharge method connects the probe to the device before the probe is charged. Figure 12 shows the current waveform for the IEC 61000-4-2 Contact Discharge Model.

## ESD Test Conditions

ESD performance depends on a variety of conditions. Please contact Maxim for a reliability report documenting test setup, methodology, and results.

## Applications Information

## Data Transfer in USB Mode

## Transmitting Data to the USB

To transmit data to the USB, operate the MAX3349EA in USB mode (see the Operating Modes section), and drive OE low. The MAX3349EA transmits data to the USB differentially on D+ and D-. VP and VM serve as differential input signals to the driver. When VP and VM are both driven low, a single-ended zero (SE0) is output on D+/D-.

## Receiving Data from the USB

To receive data from the USB, operate the MAX3349EA in USB mode (see the Operating Modes section.) Drive OE high and SUS low. Differential data received at D+/D- appears as a logic signal at RCV. VP and VM are the outputs of single-ended receivers on D+ and D-.

## Data Transfer in UART Mode

In  UART mode, D+ is an input and D- is an output. UART signals on Tx are presented on D-, and signals on D+ are presented on Rx. The UART signaling levels for  D+/D- are determined by VUART. The voltage thresholds for Rx and Tx are determined by VL. The voltage thresholds for D+ and D- are determined by VUART.

## Power-Supply Decoupling

Bypass VBUS, VL, and VUART to ground with 0.1µF ceramic capacitors. Additionally, bypass VTRM to ground with a 1µF ceramic capacitor. Place all bypass capacitors as close as possible to the device .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## Timing Diagrams

Figure 14. UART Receiver Timing

<!-- image -->

Figure 13. UART Transmitter Timing

<!-- image -->

## Power Sequencing

There are no power-sequencing requirements for VL, VUART, and VBUS.

## UCSP Application Information

For the latest application details on UCSP construction, dimensions, tape carrier information, printed circuitboard techniques, bump-pad layout, and recommended reflow temperature profile, as well as the latest i nformation on reliability testing results, refer to the Application Note UCSP- A Wafer-Level ChipScale Package available on Maxim's website at www.maxim-ic.com/ucsp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## Typical Operating Circuit

<!-- image -->

Chip Information

PROCESS: BiCMOS

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## Functional Diagram

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## USB 2.0 Full-Speed Transceiver with UART Multiplexing Mode

Package Information (continued)

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 17