<!-- lastmod 2025-05-21 -->
<!-- image -->

## FEATURES

- Simultaneous and continuous measurement of 16 cell voltages
- Passive cell balancing with programmable pulse-width modulation control per channel
- Supports simultaneous cell balancing on adjacent channels
- Configurable digital low-pass filters per channel
- Bidirectional isoSPI interface
- 2 Mbps isolated serial communications
- Uses a single twisted pair cable
- Low EMI susceptibility and emissions
- Capacitor or transformer-coupled
- Low-power cell monitoring mode
- Bus bar bypass and measurement support
- Up to 10 pins configurable as general-purpose analog input or digital I/O
- Temperature or other sensor inputs
- Configurable as an I 2 C or SPI controller
- Maximum lifetime TME: ±1.8 mV at 3.3 V per cell (-40°C to +125°C)
- Sleep-state supply current of 4 μA
- 72-/80-lead side-solderable package with exposed pad
- AEC-Q100 qualified for automotive applications
- ISO 26262 life cycle, ASIL D

## APPLICATIONS

- Electric and hybrid electric vehicles
- Backup battery systems
- Grid energy storage

## 16-Channel Multicell Battery Monitor

## TYPICAL APPLICATION CIRCUIT

Figure 1. Typical Application Circuit

<!-- image -->

## GENERAL DESCRIPTION

The ADBMS6830 is a multicell battery stack monitor that measures up to 16 series-connected battery cells.

All cells can be measured simultaneously with two individual analog-to-digital converters (ADCs). Each channel includes a programmable digital low-pass filter. A second set of similar ADCs provides closely correlated measurements to ensure redundant measurement capability required to meet safety standards.

The ADBMS6830 allows bus bars to be bypassed and direct measurement of negative bus bar voltages.

The ADBMS6830 has a bidirectional isolated serial-port interface (isoSPI) for high-speed, RF-immune communication over simple twisted pair cables. Using the isoSPI interface, multiple ADBMS6830s may be connected in a daisy-chain configuration to a battery management system (BMS) controller enabling simultaneous monitoring of long, high-voltage strings of battery cells. Using the bidirectional feature, the daisy-chain may also be configured to provide communication redundancy to protect against a cable break along the chain.

The ADBMS6830 is powered directly from the battery to be measured by the linear regulator. The device supports internal and external passive balancing with individually programmable pulse-width modulation (PWM) control. When in SLEEP state, the device draws 4 µA, which minimizes the discharge of the battery stack.

For more information on the ADBMS6830, contact BMS\_Doc\_Request@analog.com.

## NOTES

<!-- image -->