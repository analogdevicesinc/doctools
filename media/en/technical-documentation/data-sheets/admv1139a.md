<!-- lastmod 2025-04-11 -->
<!-- image -->

## ADMV1139A

## 37 GHz to 50 GHz, 5G, Microwave Upconverter and Downconverter

## APPLICATIONS

- Millimeter-wave 5G applications
- Point to point microwave radios
- Radar and electronic warfare systems
- Instrumentation and automatic test equipment (ATE)

## GENERAL DESCRIPTION

The ADMV1139A is a silicon on isolator (SOI), microwave, upconverter and downconverter optimized for 5G radio designs operating in the 37 GHz to 50 GHz frequency range.

Both upconverters and downconverters offer two modes of frequency translation. One mode is conversion from and/or to complex intermediate frequency (IF) signals, which then pass through an optional on-chip 90° IF hybrid, known as IF mode.

The other mode is a direct conversion from and/or to differential baseband inphase/quadrature (I/Q) inputs and outputs, known as baseband mode. The I/Q baseband output common-mode voltage is programmable between 0.7 V and 1.5 V.

When the device is used as an image rejecting downconverter, the unwanted image term is typically rejected to 26 dBc, before calibration. The ADMV1139A offers a square law power detector to allow monitoring of the power levels at the mixer inputs of the downconverter.

The RF receive input, RF transmit output, and local oscillator (LO) interface are all single-ended and matched to 50 Ω. The on-chip RF switch provides the option to combine the transmit and receive RF ports together for time division duplex (TDD) applications.

The serial port interface (SPI) provides adjustment of the LO chain I/Q phase to allow optimum sideband rejection. In addition, the SPI allows powering down the output envelope detector to reduce power consumption when carrier feedthrough optimization is not necessary.

The ADMV1139A upconverter and downconverter is housed in a compact, thermally enhanced, 6 mm × 6.5 mm, ball grid array (BGA) package. This BGA package enables the ability to heat sink the ADMV1139A from the top of the package for the most efficient thermal heat sinking. The ADMV1139A operates over the -40°C to +95°C T C range.

Throughout the figures within this data sheet, Rx means receiver and Tx means transmitter.

For more information about the ADMV1139A, contact Analog Devices, Inc., sales office at: mmWave5G@analog.com.

Rev. SpB

DOCUMENT FEEDBACK

## FEATURES

- Integration of an upconverter (a transmitter), a downconverter (a receiver), and a LO chain with 4× multiplier in one chip
- RF frequency range: 37 GHz to 50 GHz
- Optional on-chip RF switch port between the transmitter and the receiver
- LO input frequency range: 7.25 GHz to 12.05 GHz
- Two operation modes for both upconverter and downconverter
- Direct conversion of differential baseband I/Q (baseband mode)
- Complex IF operation with optional on-chip hybrid (IF mode)
- Programmable baseband output common-mode voltage from 0.7 V to 1.5 V in receive mode, set via either SPI or physical pin
- Programmable mixer gate voltage to accommodate baseband input common-mode from 0 V to 1.5 V in transmit mode
- Matched, 50 Ω impedance, single-ended RF input and output, and RF switch port
- Matched, 50 Ω impedance single-ended LO input
- Low phase variation vs. gain control
- Upconversion mode
- Sideband rejection and carrier feedthrough optimization
- Envelope detector for LO feedthrough calibration
- Downconversion mode
- Image rejection and I/Q imbalance optimization
- Baseband I/Q dc offset correction
- Receiver mixer power detector for receiver gain setting
- LO chain features
- Variable gain to accommodate the various LO input levels
- 360° phase control shifter for LO synchronization
- I/Q phase correction
- Fast TDD switching time via external pins
- Calibration probes for array calibration
- Programmable via a 3-wire or 4-wire SPI, compatible with ADMV4928 interface
- 6 mm × 6.5 mm, BGA package (see the Outline Dimensions section)

## NOTES

<!-- image -->

<!-- image -->